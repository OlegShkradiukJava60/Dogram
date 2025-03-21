const detailedImage = document.querySelector(".detailedContainer--image");
const detailedTitle = document.querySelector(".detailedContainer--title");
const gallery = document.querySelector(".gallery");

async function Cats() {
  const response = await fetch("https://api.thecatapi.com/v1/breeds");
  const data = await response.json();
  const items = getItems(getImages(data));
  gallery.innerHTML = items;
  addEventListeners();
}

function getImages(data) {
  return data.map(cat => `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`);
}

function getItems(data) {
  return data
    .map(cat => getItem(
      `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`,
      cat.name =, 
      cat.description || "Описание отсутствует"
    ))
    .join("");
}


function getItem(image, title, description) {
  return `
    <li class="gallery--item">
      <img src="${image}" class="gallery--item_image">
      <h3 class="gallery--item_title">${title}</h3>
      <p class="gallery--item_description">${description}</p>
    </li>
  `;
}



function addEventListeners() {
  document.querySelectorAll(".gallery--item_image").forEach(img => {
    img.addEventListener("click", () => setDetails(img));
  });
}

function setDetails(galleryImage) {
  detailedImage.src = galleryImage.getAttribute("data-detailed-image");
  animate();
}

function animate() {
  detailedImage.classList.remove("animation-up");
  setTimeout(() => {
    detailedImage.classList.add("animation-up");
  }, 0);
}

Cats();
