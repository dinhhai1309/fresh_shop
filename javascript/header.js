const shop = document.querySelector('.list-shop-mb');
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

const headermb= document.querySelector('.icon-list');
const isShoww = false;
headermb.addEventListener('click',function (){
    this.isShoww = !this.isShoww;
    if(this.isShoww == true){
        document.querySelector('.header-mobile').style.display = 'block';
    }
    else {
        document.querySelector('.header-mobile').style.display = 'none';
    }
});