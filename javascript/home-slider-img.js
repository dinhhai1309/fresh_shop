let index = 0;
const slides = document.getElementsByClassName('slider-item');
const sliderNavs = this.document.querySelectorAll(".fa-square");
function Hien_thi_slide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${index * 100}%)`;
  }
}

function next() {
  if (index < slides.length - 1) {
    index++;
  } else {
    index = 0;
  }
  Hien_thi_slide();
}

function prev() {
  if (index > 0) {
    index--;
  } else {
    index = slides.length - 1;
  }
  Hien_thi_slide();
}

setInterval(next,3500);

Hien_thi_slide();