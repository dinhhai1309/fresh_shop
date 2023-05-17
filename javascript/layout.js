document.getElementById('header').innerHTML = `
<div id="header">
        <div class="header-top">
            <div class="top-list">
                <div class="list-price-down">
                    <button><p>¥ JPY</p><i class="fa-solid fa-sort-down"></i></button>
                    <ul class="list-price-select">
                        <li><button>$ USD</button></li>
                        <li><button>€ EUR</button></li>
                    </ul>
                </div>
                <div class="list-phone">123 255 333
                    Call US:- <a href="#" class="phone-number">+11 900 800 100</a>
                </div>
                <div class="list-nav">
                    <ul>
                        <li class="nav-account">
                            <a href=""><i class="fa-solid fa-user"></i>MY ACCOUNT </a>|
                        </li> 
                        <li class="nav-location">
                            <a href=""><i class="fa-solid fa-location-dot"></i>OUR LOCATION </a>|
                        </li> 
                        <li class="nav-contact">
                            <a href=""><i class="fa-solid fa-headset"></i>CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="top-sign">
                <div class="sign-qc">
                    <i class="fa-solid fa-fire"></i> Off 50%! Shop now
                </div>
                <div class="sign-here">
                    <button>
                        Register Here <i class="fa-solid fa-sort-down"></i>
                    </button>
                    <div class="sign-here-list">
                        <button class="sign-up"> Sign up</button>
                        <button class="sign-in">Sign in</button>
                    </div>

                </div>
            </div>
        </div>

        <div class="header-bottom">
            <i class="fa-solid fa-bars icon-list"></i>
            <div class="bottom-logo">
                <a href="./home.html"><img src="./image/logo.png" alt="logo"></a>
            </div>
            <div class="bottom-list">
                <ul>
                    <li class="tab-item list-home">HOME</li>
                    <li class="tab-item list-aboutc">ABOUT US</li>
                    <li class="tab-item list-shop">SHOP <i class="fa-solid fa-sort-down"></i></li>
                    <li class="tab-item list-gallery">GALLERY</li>
                    <li class="tab-item list-contact">CONTACT US</li>
                </ul>
            </div>

            <div class="bottom-search">
                <i class="search fa-solid fa-magnifying-glass"></i>
                <div class="bottom-cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>My Cart</span>
                </div>
            </div>
        </div>

        <!-- start: list-shop-nav: shop-nav -->
        <div class="list-shop-nav">
            <ul>
                <li><a href="">Sidebar Shop</a></li>
                <li><a href="">Shop Detail</a></li>
                <li><a href="">Cart</a></li>
                <li><a href="">Checkout</a></li>
                <li><a href="">My Account</a></li>
                <li><a href="">Wishlist</a></li>
            </ul>
        </div>
        <!-- end: list-shop-nav: shop-nav -->

        <!-- header mobile -->
        <div class="header-mobile">
            <ul class="mobile-nave-list">
                <li class="list-home"><a href="./home.html">HOME</a></li>
                <hr>
                <li class="list-about"><a href="./about.html">ABOUT US</a></li>
                <hr>
                <li class="list-shop-mb">SHOP <i class="fa-solid fa-sort-down"></i>
                    <ul class="shop-nav">
                        <li><a href="">Sidebar Shop</a></li>
                        <hr>
                        <li><a href="">Shop Detail</a></li>
                        <hr>
                        <li><a href="">Cart</a></li>
                        <hr>
                        <li><a href="">Checkout</a></li>
                        <hr>
                        <li><a href="">My Account</a></li>
                        <hr>
                        <li><a href="">Wishlist</a></li>
                    </ul>
                </li>
                <hr>
                <li class="list-gallery"><a href="">GALLERY</a></li>
                <hr>
                <li class="list-contact"><a href="">CONTACT US</a></li>
                <hr>
            </ul>
        </div>

        <!-- start: sign in -->
        <div class="sign-in-detail">
            <div class="sign-in-layout">
                <button><i class="fa-solid fa-xmark"></i></button>
                <div class="sign-in-title">
                    <img src="./image/logo.png" alt="">
                    <h4>Welcome to Fresh Shop</h4>
                </div>

                <input type="email" name="" class="sign-in-email" placeholder="Email">

                <div class="sign-in-pass">
                    <input type="password" name="" placeholder="Password">
                    <br>
                    <a href="#">Forgot your password?</a>
                </div>

                <div class="sign-in-login">
                    <button>Log in</button>
                    <br>
                    OR
                </div>

                <div class="sign-in-connect">
                    <button class="connect-f"><i class="fa-brands fa-facebook"></i>Continue with Facebook</button>
                    <br>
                    <button class="connect-g"><i class="fa-brands fa-google"></i>Continue with Google</button>
                </div>

                <div class="sign-in-last">
                    Not on Fresh Shop yet?
                    <button class="btnSignUp">Sign up</button>
                </div>
                
            </div>
        </div>
        <!-- end: sign in -->

        <!-- start: sign up -->
        <div class="sign-up-detail">
            <div class="sign-in-layout">
                <button><i class="fa-solid fa-xmark icon-up"></i></button>
                <div class="sign-in-title">
                    <img src="./image/logo.png" alt="">
                    <h4>Welcome to Fresh Shop</h4>
                </div>

                <input type="email" name="" class="sign-in-email" placeholder="Email">

                <div class="sign-in-pass">
                    <input type="password" name="" placeholder="Create a password">
                    <br>
                </div>

                <div class="sign-in-login">
                    <button>Continue</button>
                    <br>
                    OR
                </div>

                <div class="sign-in-connect">
                    <button class="connect-f"><i class="fa-brands fa-facebook"></i>Continue with Facebook</button>
                    <br>
                    <button class="connect-g"><i class="fa-brands fa-google"></i>Continue with Google</button>
                </div>

                <div class="sign-in-last">
                    Already a member?
                    <button class="btnLogIn">Log in</button>
                </div>
                
            </div>
        </div>
        <!-- end: sign up -->
    </div>
`

document.getElementById('footer').innerHTML = `
<!-- start instagram box -->
<div class="ig-box">
        <i id ="left" class="fa-solid fa-arrow-left " onclick="next()"></i>
        <div class="slider1">
            <div class="sliderm">
                <img src="./image/instargram-box/instagram-img-01.jpg">
            </div>
            <div class="sliderm">
                <img src="./image/instargram-box/instagram-img-02.jpg">
            </div>
            <div class="sliderm">
                <img src="./image/instargram-box/instagram-img-03.jpg">
            </div>
            <div class="sliderm">
                <img src="./image/instargram-box/instagram-img-04.jpg">
            </div>
            <div class="sliderm">
                <img src="./image/instargram-box/instagram-img-05.jpg">
            </div>
            <div class="sliderm">
                <img src="./image/instargram-box/instagram-img-06.jpg">
            </div>
            <div class="sliderm">
                <img src="./image/instargram-box/instagram-img-07.jpg">
            </div>
            <div class="sliderm">
                <img src="./image/instargram-box/instagram-img-08.jpg">
            </div>
            <div class="sliderm">
                <img src="./image/instargram-box/instagram-img-09.jpg"> 
            </div>
        </div>
        <i id ="right" class="fa-solid fa-arrow-right" onclick="prev()"></i>
    </div>
<!-- end instagram box -->

<!-- start footer -->
<div id="footer">
    <div class="footer-main">
        <div class="row-footer main-top">
            <div class="col-footer ft-time">
                <h3>Business Time</h3>
                <hr class="hr-top">
                <p class="ft-time-content">
                    Monday - Friday: 08.00am to 05.00pm <br>
                    Saturday: 10.00am to 08.00pm<br>
                    Sunday: Closed
                </p>
            </div>
            <div class="col-footer ft-news">
                <h3>Newsletter</h3>
                <hr class="hr-top">
                <div class="news-email">
                    <textarea name="" id="" cols="40" rows="1" placeholder="Email Address*"></textarea>
                    <a href="#" class="news-email-botton"><i class="fa-solid fa-envelope"></i></a>
                </div>
                <button>Submit</button>
            </div>
            <div class="col-footer ft-social">
                <h3>Social Media</h3>
                <hr class="hr-top">
                <p>Lorem issum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="social-list">
                    <ul>
                        <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-tiktok"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
                        <li><a href=""><i class="fa-solid fa-cloud"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr>
        <div class="row-footer main-bt">
            <div class="col-footer ft-about">
                <h3>ABOUT FRESHSHOP</h3>
                <hr class="hr-bt">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br>
                   <br> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div class="col-footer ft-infor">
                <h3>INFORMATION</h3>
                <hr class="hr-bt">
                <div class="infor-list">
                    <ul>
                        <li><a href="">About us</a></li>
                        <li><a href="">Customer Sersive</a></li>
                        <li><a href="">Our Sitemap</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Delivery Information</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-footer ft-contact">
                <h3>CONTACT US</h3>
                <hr class="hr-bt">
                <div class="contact-list">
                    <ul>
                        <li><i class="fa-solid fa-location-dot"></i>Address: Michael I. Days 3756
                            Preston Street Wichita,
                            KS 67213</li>
                        <li><i class="fa-solid fa-phone"></i>Phone: +1-888 705 770</li>
                        <li><i class="fa-solid fa-envelope"></i>Email: contactinfo@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-copyright">
        All Rights Reserved. © 2018 ThewayShop Design By : html design  </div>
</div>
`


if(document.getElementById('about')) {
    document.querySelector('.list-aboutc').classList = 'active'
}

if(document.querySelector('.home')) {
    document.querySelector('.list-home').classList = 'active'
}