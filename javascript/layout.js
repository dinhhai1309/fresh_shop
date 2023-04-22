document.getElementById('header').innerHTML = `
        <div class="header-top">
        <div class="top-list">
            <div class="list-price-down">
                <button><p>¥ JPY</p><i class="fa-solid fa-sort-down"></i></button>
                <ul class="list-price-select">
                    <li><button>$ USD</button></li>
                    <li><button>€ EUR</button></li>
                </ul>
            </div>
            <div class="list-phone">
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
                <a href="#">Register Here <i class="fa-solid fa-sort-down"></i></a>
                <a href="#" class="sign-in">Sign in</a>
            </div>
        </div>
        </div>

        <div class="header-bottom">
        <div class="bottom-logo">
            <a href="#"><img src="./image/logo.png" alt="logo"></a>
        </div>
        <div class="bottom-list">
            <ul>
                <li class="list-home"><a href="">HOME</a></li>
                <li class="list-about"><a href="">ABOUT US</a></li>
                <li class="list-shop"><a href="">SHOP <i class="fa-solid fa-sort-down"></i></a></li>
                <li class="list-gallery"><a href="">GALLERY</a></li>
                <li class="list-contact"><a href="">CONTACT US</a></li>
            </ul>
        </div>
        <div class="bottom-search">
            <i class="search fa-solid fa-magnifying-glass"></i>
            <div class="bottom-cart">
                <i class="fa-solid fa-cart-shopping"></i>
                My Cart
            </div>
        </div>
</div>
`

document.getElementById('footer').innerHTML = `
<!-- start instagram box -->
    <div class="ig-box">
        <i id ="left" class="fa-solid fa-arrow-left" ></i>
        <div class="slider1">
            <img src="./image/instargram-box/instagram-img-01.jpg" alt="img" draggable="false">
            <img src="./image/instargram-box/instagram-img-02.jpg" alt="img" draggable="false">
            <img src="./image/instargram-box/instagram-img-03.jpg" alt="img" draggable="false">
            <img src="./image/instargram-box/instagram-img-04.jpg" alt="img" draggable="false">
            <img src="./image/instargram-box/instagram-img-05.jpg" alt="img" draggable="false">
            <img src="./image/instargram-box/instagram-img-06.jpg" alt="img" draggable="false">
            <img src="./image/instargram-box/instagram-img-07.jpg" alt="img" draggable="false">
            <img src="./image/instargram-box/instagram-img-08.jpg" alt="img" draggable="false">
            <img src="./image/instargram-box/instagram-img-09.jpg" alt="img" draggable="false">

        </div>
        <i id ="right" class="fa-solid fa-arrow-right"></i>
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