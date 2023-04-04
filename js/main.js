const carouselImg = document.querySelector('.carouselImg');
const carouselImgCount = document.querySelectorAll('.carouselImg img').length;

let imageIndex = 0;
const imageWidth = carouselImg.clientWidth;

function moveCarousel() {
  carouselImg.style.transform = `translateX(-${imageIndex * imageWidth}px)`;
}

setInterval(() => {
  if (imageIndex === carouselImgCount - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
  moveCarousel();
}, 3000);