let index = 0;
const slides = document.getElementsByClassName('sliderm');

function Hien_thi_slide_ig() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${index * 100}%)`;
  }
}

function next_ig() {
  if (index < slides.length - 4) {
    index++;
  } else {
    index = 0;
  }
  Hien_thi_slide_ig();
}

function prev_ig() {
  if (index > 0) {
    index--;
  } else {
    index = slides.length - 1;
  }
  Hien_thi_slide_ig();
}

setInterval(next_ig,2000);

Hien_thi_slide_ig();