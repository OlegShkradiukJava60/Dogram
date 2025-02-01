
const galleryItems = document.querySelectorAll('.gallery--item');

const detailedImage = document.querySelector('.detailedContainer--image');
const detailedTitle = document.querySelector('.detailedContainer--title');

galleryItems.forEach(item => {
  item.addEventListener('click', function () {

    const newImage = item.getAttribute('data-image');
    const newTitle = item.getAttribute('data-title');
    

    detailedImage.src = newImage;
    detailedTitle.textContent = newTitle;

    detailedImage.classList.add('animate__animated', 'animate__fadeIn');
  });
  
});
