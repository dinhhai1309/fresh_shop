window.addEventListener("load", function() {
    const slider = document.querySelector(".slider")
    const sliderMain = document.querySelector(".slider-main")
    const sliderItems = document.querySelectorAll(".slider-item")
    const nextBtn = document.querySelector(".fa-arrow-right")
    const prevBtn = document.querySelector(".fa-arrow-left")
    const sliderNavs = this.document.querySelectorAll(".fa-square")
    const sliderItemWidth = sliderItems[0].offsetWidth; // lấy ra chiều rộng
    const slidesLength = sliderItems.length // xem banners có bao nhiêu phần tử
    
    let positionX = 0;
    let index = 0;

    function showSlides (){
        for(let i = 0 ; i < slidesLength -2 ; i++){
            function nextSlide(){
                positionX = positionX - sliderItemWidth
                if(index < slidesLength -1 && positionX > -3039){
                    console.log(positionX)
                    sliderMain.style = `transform: translateX(${positionX}px)`
                    index ++;
                }
                // else if(positionX == -3038){
                //     sliderMain.style = `transform: translateX(${1519}px)`
                //     index--;
                // }
                // showSlides ()
            }
            function prevSlide(){
                if(index > slidesLength -1 ){
                    sliderMain.style = `transform: translateX(${1519}px)`
                    index--;
                }
                else{
                    index =0;
                }
                showSlides ()
            } 
        } 
        setInterval(nextSlide,3000)   
           
        // setInterval(prevSlide,3000) 
    }
    
    showSlides ()

    nextBtn.addEventListener("click", function(){
        handleChangeSlider(1)
    })

    prevBtn.addEventListener("click", function(){
        handleChangeSlider(-1)
    })

    sliderNavs.forEach(item => item.addEventListener("click", function (e) {
            // khi click lần nữa sẽ remove lại
            sliderNavs.forEach(el => el.classList.remove("active"))
            e.target.classList.add("active")
            //parseInt chuyển thành số nguyên
            index = parseInt(e.target.dataset.index)
            positionX = -1 * index * sliderItemWidth
            sliderMain.style = `transform: translateX(${positionX}px)`

    })
    )
    function handleChangeSlider(direction){
        if(direction === 1){
            // nếu click đến index > slidesLength thì không click được nưa
            if (index >= slidesLength -1){
                index = slidesLength - 1;
                return;
            }
            positionX = positionX - sliderItemWidth
            sliderMain.style = `transform: translateX(${positionX}px)`
            index++;
        }
        else if(direction === -1){
            // đặt dk trong if vì nếu mới vào ấn prev luôn 10 lần thì khi next sẽ bị lỗi khoảng trắng và không prev được nữa
            if (index <= 0){
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth
            sliderMain.style = `transform: translateX(${positionX}px)`
            index--;
        }
        sliderNavs.forEach(el => el.classList.remove("active"))
        sliderNavs[index].classList.add("active")
    }

})