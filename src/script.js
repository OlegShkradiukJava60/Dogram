const detailedImage = document.querySelector(".detailedContainer--image");
const detailedTitle = document.querySelector(".detailedContainer--title");
const detailedOverview = document.querySelector(".detailedContainer--overview");
const galleryContainer = document.querySelector(".gallery");

const apiKey = "8c79629e2f6857b0b7addc2a59ac30b6";

async function drawMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_companies=420`
    );


    const data = await response.json();
    galleryContainer.innerHTML = displayMovies(data.results);
    addImage();
  } catch (error) {
    console.error("Request Error:", error);
  }
}

function displayMovies(movies) {
  return movies
    .map((movie) => {
      const image = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "placeholder.jpg";
      const detailedImage = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : image;
      const overview = movie.overview || "No description.";

      return `
        <li class="gallery--item">
          <img
            src="${image}"
            alt="${movie.title}"
            class="gallery--item_image"
            data-detailed-image="${detailedImage}"
            data-detailed-title="${movie.title}"
            data-detailed-overview="${overview}"
          />
          <span class="gallery--item_title">${movie.title}</span>
        </li>
      `;
    })
    .join("");
}

function addImage() {
  document.querySelectorAll(".gallery--item_image").forEach((image) => {
    image.addEventListener("click", function () {
      setDetails(image);
    });
  });
}

function setDetails(image) {
  detailedImage.classList.remove("animation-up");
  detailedTitle.classList.remove("animation-down");

  setTimeout(() => {

    detailedImage.src = image.getAttribute("data-detailed-image");
    detailedTitle.innerHTML = image.getAttribute("data-detailed-overview");

    detailedImage.classList.add("animation-up");
    detailedTitle.classList.add("animation-down");

  }, 10);

}

drawMovies();