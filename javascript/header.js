const shop = document.querySelector('.list-shop-mb');
const headermb= document.querySelector('.icon-list');
const coat = document.querySelector('.list-price-down');
const sign = document.querySelector('.sign-here')
const shop_nav = document.querySelector('.list-shop')
const sign_in = document.querySelector('.sign-in')
const sign_up = document.querySelector('.sign-up')
const exit = document.querySelector('.fa-xmark')
const exitup = document.querySelector('.icon-up')
const exit_ = document.querySelector('.sign-in-detail')
const exit_up = document.querySelector('.sign-up-detail')
const btnLogIn = document.querySelector('.btnLogIn')
const btnSignUp = document.querySelector('.btnSignUp')
const sign_layout = document.querySelectorAll('.sign-in-layout')
const list_about = document.querySelector('.list-aboutc')
const list_home = document.querySelector('.list-home')

const isShow = false;
shop.addEventListener('click',function (){
    this.isShow = !this.isShow;
    if(this.isShow == true){
        document.querySelector('.shop-nav').style.display = 'block';
    }
    else {
        document.querySelector('.shop-nav').style.display = 'none';
    }
});


headermb.addEventListener('click',function (){
    this.isShoww = !this.isShoww;
    if(this.isShoww == true){
        document.querySelector('.header-mobile').style.display = 'block';
    }
    else {
        document.querySelector('.header-mobile').style.display = 'none';
    }
});

coat.addEventListener('click',function() {
    this.isShow = !this.isShow;
    if(this.isShow == true){
        document.querySelector('.list-price-select').style.display = 'block';
    }
    else {
        document.querySelector('.list-price-select').style.display = 'none';
    }
})

sign.addEventListener('click',function() {
    this.isShow = !this.isShow;
    if(this.isShow == true){
        document.querySelector('.sign-here-list').style.display = 'block';
    }
    else {
        document.querySelector('.sign-here-list').style.display = 'none';
    }
})

shop_nav.addEventListener('click',function() {
    this.isShow = !this.isShow;
    if(this.isShow == true){
        document.querySelector('.list-shop-nav').style.display = 'block';
    }
    else {
        document.querySelector('.list-shop-nav').style.display = 'none';
    }
})

sign_in.addEventListener('click',function() {
    document.querySelector('.sign-in-detail').style.display = 'block';
})

exit.addEventListener('click',function() {
    document.querySelector('.sign-in-detail').style.display = 'none';
})

exit_.addEventListener('click',function() {
    document.querySelector('.sign-in-detail').style.display = 'none';
})

sign_up.addEventListener('click',function() {
    document.querySelector('.sign-up-detail').style.display = 'block';
})


exitup.addEventListener('click',function() {
    document.querySelector('.sign-up-detail').style.display = 'none';
})

exit_up.addEventListener('click',function() {
    document.querySelector('.sign-up-detail').style.display = 'none';
})

// khi đang ở đăng ký mà muốn đăng nhập, click vào Log in chuyển sang sign in
btnLogIn.addEventListener('click',function() {
    document.querySelector('.sign-up-detail').style.display = 'none';
    document.querySelector('.sign-in-detail').style.display = 'block';
})

// ngược lại khi đăng nhập nhưng chưa có tài khoản
btnSignUp.addEventListener('click',function() {
    document.querySelector('.sign-in-detail').style.display = 'none';
    document.querySelector('.sign-up-detail').style.display = 'block';
})

// khi ấn vào sign-in-layout sẽ không bị thoát ra, dừng sự kiện nổi bọt, lọc tất cả class sign_layout nghe từng hành vi
for(const i of sign_layout){
    i.addEventListener('click',function(event){
    event.stopPropagation()
})}

// start: tạo sự kiện cho bottom-list đổi màu với web-page tương ứng
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
console.log(tabs)
tabs.forEach((tab) => {
    tab.onclick = function () {
      if (this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        $$('.tab-item.active').forEach((activeTab) => {
          activeTab.classList.remove('active');
        });
        this.classList.add('active');
      }
    };
});

list_home.addEventListener('click',function() {
    window.location.href = "http://127.0.0.1:5500/home.html";
})

list_about.addEventListener('click',function() {
    window.location.href = "http://127.0.0.1:5500/about.html";
})