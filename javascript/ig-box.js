const slider1 = document.querySelector(".slider1");
firstImg = slider1.querySelectorAll("img") [0];
arrowIcons = document.querySelectorAll(".ig-box i");


let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // hiển thị và ẩn biểu tượng khi ấn sang img tiếp theo
    console.log("1",slider1.scrollWidth);
    console.log("2", slider1.clientWidth);
    var scrollWidth = slider1.scrollWidth - slider1.clientWidth;
    console.log("3",scrollWidth);
    arrowIcons[0].style.display = slider1.scrollLeft == 0 ? "none" : "block"
    arrowIcons[1].style.display = slider1.scrollLeft == scrollWidth ? "none" : "block"

}
setInterval(showHideIcons,3000);

arrowIcons.forEach(icon => {
    icon.addEventListener("click",() => {
        let firstImgWidth = firstImg.clientWidth + 340;
        slider1.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setInterval(showHideIcons,3000);
    })
})

const autoSlide = () => {
    positionDiff = Math.abs(positionDiff)
    let firstImgWidth = firstImg.clientWidth + 340;
    let valDifference = firstImgWidth - positionDiff
    if(slider1.scrollLeft > prevScrollLeft) {
        return slider1.scrollLeft += positionDiff > firstImgWidth/3 ? valDifference : -positionDiff
    }
    return console.log("user is crolling to the left")
}
const dragStart = (e) => {
    // cập nhật giá trị biến toàn cục trên sự kiện nhấp chuột
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider1.scrollLeft;
}

const dragging = (e) => {
    // cuộn hình ảnh/ băng chuyền sang trái theo con trỏ chuột
    if(!isDragStart) return;
    e.preventDefault();
    slider1.classList.add("dragging")
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider1.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    slider1.classList.remove("dragging")
    autoSlide()
}

slider1.addEventListener("mousedown",dragStart);
slider1.addEventListener("touchstart",dragStart);

slider1.addEventListener("mousemove",dragging);
slider1.addEventListener("touchmove",dragging);

slider1.addEventListener("mouseup",dragStop);
slider1.addEventListener("mouseleave",dragStop);
slider1.addEventListener("touchend",dragStop);



