const galleryItems = document.querySelectorAll('.gallery--item');

const detailedImage = document.querySelector('.detailedContainer--image');
const detailedTitle = document.querySelector('.detailedContainer--title');

galleryItems.forEach(item => {
  item.addEventListener('click', function () {
    const newImage = item.getAttribute('data-image');
    const newTitle = item.getAttribute('data-title');
    
    // Устанавливаем новое изображение и новый заголовок
    detailedImage.src = newImage;
    detailedTitle.textContent = newTitle;

    // Убираем класс анимации, чтобы она сработала снова
    detailedImage.classList.remove('animate__fadeIn');
    detailedTitle.classList.remove('animate__fadeInUp');

    // Применяем анимацию снова
    // Используем setTimeout, чтобы дать браузеру время удалить старую анимацию
    setTimeout(() => {
      detailedImage.classList.add('animate__fadeIn');
      detailedTitle.classList.add('animate__fadeInUp');
    }, 10); // Маленькая задержка перед добавлением классов
  });
});
