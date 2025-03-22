const detailedImage = document.querySelector(".detailedContainer--image");
const detailedTitle = document.querySelector(".detailedContainer--title");
const galleryContainer = document.querySelector(".gallery");


async function cats() {
  if (!galleryContainer) {
    console.error("Element 'gallery' not found");
    return;
  }

  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    if (!response.ok) throw new Error("Failed to load breed list");

    const data = await response.json();
    galleryContainer.innerHTML = getItems(data);

    addImage();
  } catch (error) {
    console.error("Data loading error:", error);
    galleryContainer.innerHTML =
      "<p>Error loading data. Please try again later.</p>";
  }
}

function addImage() {
  document.querySelectorAll(".gallery--item_image").forEach((image) => {
    image.addEventListener("click", function () {
      setDetails(image);
    });
  });
}

function getItems(data) {
  return data
    .map((breed) => {
      const image = breed.reference_image_id
        ? `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`
        : "images/placeholder.jpg";
      return `
        <li class="gallery--item">
          <img
            src="${image}"
            alt="${breed.name}"
            class="gallery--item_image"
            data-detailed-image="${image}"
            data-detailed-title="${breed.description || "Description unavailable"}"
          />
          <span class="gallery--item_title">${breed.name}</span>
        </li>
      `;
    })
    .join("");
}


function setDetails(image) {
  detailedImage.classList.remove("animation-up");
  detailedTitle.classList.remove("animation-down");

  detailedImage.src = image.getAttribute("data-detailed-image");
  detailedTitle.innerHTML = image.getAttribute("data-detailed-title");

  detailedImage.classList.add("animation-up");
  detailedTitle.classList.add("animation-down");
}

cats();
