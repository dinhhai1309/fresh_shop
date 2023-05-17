let index1 = 0;
const slides1 = document.getElementsByClassName('slider-item');
const sliderNavs = this.document.querySelectorAll(".fa-square");
function Hien_thi_slide() {
  for (let i = 0; i < slides.length; i++) {
    slides1[i].style.transform = `translateX(-${index1 * 100}%)`;
  }
}

function next() {
  if (index1 < slides1.length - 1) {
    index1++;
  } else {
    index1 = 0;
  }
  Hien_thi_slide();
}

function prev() {
  if (index1 > 0) {
    index1--;
  } else {
    index1 = slides1.length - 1;
  }
  Hien_thi_slide();
}

setInterval(next,3500);

Hien_thi_slide();