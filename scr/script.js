const galleryItems = document.querySelectorAll('.gallery--item');

const detailedImage = document.querySelector('.detailedContainer--image');
const detailedTitle = document.querySelector('.detailedContainer--title');

galleryItems.forEach(item => {
  item.addEventListener('click', function () {
    const newImage = item.getAttribute('data-image');
    const newTitle = item.getAttribute('data-title');
    

    detailedImage.src = newImage;
    detailedTitle.textContent = newTitle;


    detailedImage.classList.remove('animate__fadeIn');
    detailedTitle.classList.remove('animate__fadeInUp');

    setTimeout(() => {
      detailedImage.classList.add('animate__fadeIn');
      detailedTitle.classList.add('animate__fadeInUp');
    }, 10); 
  });
});
