backgroudcolor();
  //skrollr
  var s = skrollr.init({
    edgeStrategy: 'set',
    easing: 'linear'
});


window.addEventListener("scroll", () => {
    let pageYOffset = (window.pageYOffset || document.documentElement.scrollTop);

    document.querySelector(".scroll").textContent = pageYOffset;
    let sec5 = document.querySelector("#section4").offsetTop + 400;
    let offset = (pageYOffset - sec5) * 1.5;
    
    if(pageYOffset > sec5){
        document.querySelector(".sec5").classList.add("show");
        gsap.to(".sec5", {left: -offset, duration:3, ease: "power4.out"});
    } else {
        document.querySelector(".sec5").classList.remove("show");
    }

    

    
});







// 코드 메뉴 클릭시 변경 index.html, css , js
 $(".menu li").click(function(e){
    e.preventDefault();
    $(this).addClass("active").find("div").show().parent().siblings().removeClass("active").find("div").hide();
});

// 코드 보여주는 영역
// htmlText
let htmlText = [];

// 탭메뉴 html
htmlText.push(`&lt;div class="notice4"&gt;
&lt;h4 class="ir_so"&gt;탭 메뉴&lt; /h4&gt;
&lt;div class="tab-menu"&gt;
    &lt;ul&gt;
        &lt;li class="active"&gt;&lt; a href="#"&gt;공지사항1&lt; /a&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt; a href="#"&gt;첫번쨰 공지사항1 목록입니다.&lt; /a&gt;&lt; /li&gt;
                &lt;li&gt;&lt; a href="#"&gt;첫번쨰 공지사항1 목록입니다.&lt; /a&gt;&lt; /li&gt;
                &lt;li&gt;&lt; a href="#"&gt;첫번쨰 공지사항1 목록입니다.&lt; /a&gt;&lt; /li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;&lt; a href="#"&gt;공지사항2&lt; /a&gt;
            &lt;ul style="display: none"&gt;
                &lt;li&gt;&lt; a href="#"&gt;두번쨰공지사항2 목록입니다.&lt; /a&gt;&lt; /li&gt;
                &lt;li&gt;&lt; a href="#"&gt;두번쨰공지사항2 목록입니다.&lt; /a&gt;&lt; /li&gt;
                &lt;li&gt;&lt; a href="#"&gt;두번쨰공지사항2 목록입니다.&lt; /a&gt;&lt; /li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;&lt; a href="#"&gt;공지사항3&lt; /a&gt;
            &lt;ul style="display: none"&gt;
                &lt;li&gt;&lt; a href="#"&gt;세번쨰 공지사항3 목록입니다.&lt; /a&gt;&lt; /li&gt;
                &lt;li&gt;&lt; a href="#"&gt;세번쨰 공지사항3 목록입니다.&lt; /a&gt;&lt; /li&gt;
                &lt;li&gt;&lt; a href="#"&gt;세번쨰 공지사항3 목록입니다.&lt; /a&gt;&lt; /li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;`);
// 로그인 html
htmlText.push(` &lt;!-- 로그인 --&gt;
&lt;div id="login-wrap"&gt;
   &lt;h4 class="ir_so"&gt;로그인 정보&lt;/h4&gt;
   &lt;form action="post" id="login-from" name="login-from"&gt;
       &lt;fieldset&gt;
           &lt;legend class="ir_so"&gt;로그인 및 관련 설정&lt;/legend&gt;
               &lt;div class="login-header"&gt;
                   &lt;h5 class="ir_so"&gt;로그인 보안&lt;/h5&gt;
                   &lt;div class="lh-check"&gt;
                       &lt;input id="infor-check" type="checkbox" class="input-check"&gt;
                       &lt;label for="infor-check"&gt;로그인 상태 유지&lt;/label&gt;
                   &lt;/div&gt;
                   &lt;div class="lh-ip"&gt;
                       IP보안 &lt;strong&gt;ON&lt;/strong&gt;
                   &lt;/div&gt;
               &lt;/div&gt;
               &lt;div class="login-content"&gt;
                   &lt;h5 class="ir_so"&gt;로그인 영역&lt;/h5&gt;
                   &lt;div class="lc-text"&gt;
                      &lt;label for="uid" class="ir_so"&gt;아이디&lt;/label&gt;
                       &lt;input type="text" id="uid" name="uid" class="input-text" maxlength="20"&gt;
                       &lt;label for="uid" class="ir_so"&gt;비밀번호&lt;/label&gt;
                       &lt;input type="password" id="upw" name="upw" class="input-text" maxlength="20"&gt;
                       &lt;button class="lc-btn" type="submit"&gt;로그인&lt;/button&gt;
                   &lt;/div&gt;
               &lt;/div&gt;
               &lt;div class="login-footer"&gt;
                   &lt;h5 class="ir_so"&gt;로그인 문제 해결&lt;/h5&gt;
                   &lt;ul&gt;
                       &lt;li&gt;&lt;a href="#"&gt;&lt;strong&gt;회원가입&lt;/strong&gt;&lt;/a&gt; / &lt;/li&gt;
                       &lt;li&gt;&lt;a href="#"&gt;아이디&lt;/a&gt; &middot; &lt;a href="#"&gt;비밀번호&lt;/a&gt;&lt;/li&gt;
                   &lt;/ul&gt;
               &lt;/div&gt;
       &lt;/fieldset&gt;
   &lt;/form&gt;
&lt;/div&gt;
&lt;!-- //로그인 --&gt;`);
//스킵 네비게이션 html
htmlText.push(`&lt;!-- 스킵 네비게이션 --&gt;
&lt;div id="skip"&gt;
    &lt;a href="#"&gt;전체 메뉴 바로가기&lt;/a&gt;
    &lt;a href="#"&gt;배너 메뉴 바로가기&lt;/a&gt;
    &lt;a href="#"&gt;컨텐츠 메뉴 바로가기&lt;/a&gt;
&lt;/div&gt;
&lt;!-- //스킵 네비게이션 --&gt;`);
//슬릭 html
htmlText.push(`&lt;!-- ban --&gt;
    &lt;div class="ban"&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link1.jpg" alt="웹 표준 지침서 보기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link2.jpg" alt="CSS 버튼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link3.jpg" alt="로그인 폼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link1.jpg" alt="웹 표준 지침서 보기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link2.jpg" alt="CSS 버튼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link3.jpg" alt="로그인 폼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link1.jpg" alt="웹 표준 지침서 보기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link2.jpg" alt="CSS 버튼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link3.jpg" alt="로그인 폼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link1.jpg" alt="웹 표준 지침서 보기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link2.jpg" alt="CSS 버튼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link3.jpg" alt="로그인 폼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
&lt;/div&gt;


&lt;!-- 갤러리 --&gt;
&lt;div class="gallery"&gt;
    &lt;h4&gt;포트폴리오&lt;/h4&gt;
    &lt;div class="gallery_btn"&gt;
&lt;!--                                    
        &lt;ul&gt;
            &lt;li class="gb_icon1"&gt;&lt;a href="#"&gt;&lt;span class="ir_pm"&gt;시작&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li class="gb_icon2"&gt;&lt;a href="#"&gt;&lt;span class="ir_pm"&gt;정지&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li class="gb_icon3"&gt;&lt;a href="#"&gt;&lt;span class="ir_pm"&gt;이전이미지&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li class="gb_icon4"&gt;&lt;a href="#"&gt;&lt;span class="ir_pm"&gt;다음이미지&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
--&gt;                                    
        &lt;button class="gb_icon1 play"&gt;&lt;span class="ir_pm"&gt;시작&lt;/span&gt;&lt;/button&gt;
        &lt;button class="gb_icon2 pause"&gt;&lt;span class="ir_pm"&gt;정지&lt;/span&gt;&lt;/button&gt;
        &lt;button class="gb_icon3 prev"&gt;&lt;span class="ir_pm"&gt;이전이미지&lt;/span&gt;&lt;/button&gt;
        &lt;button class="gb_icon4 next"&gt;&lt;span class="ir_pm"&gt;다음이미지&lt;/span&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="gallery_img"&gt;
&lt;!-- 
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="#"&gt;&lt;img src="img/gallery01.jpg" alt="갤러리1"&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;&lt;img src="img/gallery02.jpg" alt="갤러리2"&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;&lt;img src="img/gallery03.jpg" alt="갤러리3"&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;&lt;img src="img/gallery04.jpg" alt="갤러리4"&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;&lt;img src="img/gallery05.jpg" alt="갤러리5"&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt; 
--&gt;
        &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/gallery01.jpg" alt="갤러리1"&gt;&lt;/a&gt;&lt;/div&gt;
        &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/gallery02.jpg" alt="갤러리2"&gt;&lt;/a&gt;&lt;/div&gt;
        &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/gallery03.jpg" alt="갤러리3"&gt;&lt;/a&gt;&lt;/div&gt;
        &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/gallery04.jpg" alt="갤러리4"&gt;&lt;/a&gt;&lt;/div&gt;
        &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/gallery05.jpg" alt="갤러리5"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- //갤러리 --&gt;

`);

//csstext
let cssText = [];
// 탭메뉴 CSS
cssText.push(`/* 탭 메뉴*/ 
.tab-menu {position: relative; border: 1px solid #ccc; padding: 8px; height: 105px;}
.tab-menu ul {overflow: hidden; border-bottom: 1px solid #ccc;}
.tab-menu ul li {float: left; border: 1px solid #ccc; margin-right: -1px; margin-bottom: -1px;}
.tab-menu ul li a {display: block; padding: 5px 10px;}
.tab-menu ul li ul {position: absolute; left: 0; top: 48px; border: 0;}
.tab-menu ul li ul li {float: none; border: 0; padding-left: 18px; background: url(../img/dot.gif) no-repeat 9px 8px;}
.tab-menu ul li ul li a {padding: 0;}

.tab-menu ul li.active {background-color: #2c94c4;}
.tab-menu ul li.active a {color: #fff;}
.tab-menu ul li.active ul li a {color: #333;}`);
// 로그인 CSS
cssText.push(`/* 로그인 */
#login-wrap {background: #f2f4f5; padding: 15px; }
.login-header {overflow: hidden; font-size: 12px; height: 24px; }
.login-header .lh-check {float: left; padding-right: 15px; } 
.login-header .lh-check .input-check {vertical-align: -2px;}
.login-header .lh-ip {float: left;}
.login-header .lh-ip strong {color: #0093bd; text-decoration: underline;}

.login-content {position: relative; }
.login-content .lc-text .input-text {
    width: 182px; height: 16px; 
    padding: 2px 5px; border: 1px solid #bebebe;
    margin-bottom: 2px; background: #fff; 
}
.login-content .lc-text .lc-btn {
    position: absolute; right: 0; top: 0; 
    width: 62px; height: 46px; 
    background: #fff; border: 1px solid #bebebe;  
}
.login-footer {margin-top: 5px;}
.login-footer li{display: inline;}
.login-footer li a{font-size: 12px;}
`)
// 스킵 네비게이션 CSS
cssText.push(`/* 스킵 네비게이션 */
#skip {position: relative; }
#skip a {
    border: 1px solid #fff; background-color: #333; 
    color: #fff; width: 140px; text-align: center; 
    position: absolute; left: 0; top: -50px; 
    font-size: 14px; padding: 10px;
}
#skip a:active,
#skip a:focus {top: 0px;}
`)
// 슬릭베너 CSS
cssText.push(`/*  슬릭 배너 */
.ban {position: relative; padding: 24px 0; }
.ban .slick-prev {
    position: absolute; left: -80px; top: 75px; width: 43px; height: 43px;
    background: url(../img/icon.png) -150px 0px;
    text-indent: -9999px;
    cursor: pointer;
 }
.ban .slick-next {
    position: absolute; right: -80px; top: 75px; width: 43px; height: 43px;
    background: url(../img/icon.png) -150px -43px;
    text-indent: -9999px;
    cursor: pointer;
 }
.ban .slick-prev:hover {background-position: -193px 0;}
.ban .slick-next:hover {background-position: -193px -43px;}
.ban img {border: 4px solid #dcdcdc; }
.ban img:hover{border-color: #98bcdc;}

.ban .slick-slide {margin: 10px;}
.ban .slick-dots {position: absolute; bottom: 5px; display: block; width: 100%; text-align: center;}
.ban .slick-dots li {display: inline-block; margin: 5px; }
.ban .slick-dots li button {font-size: 0; line-height: 0; display: block; width: 15px; height: 15px;
    background: #5dbfeb; border-radius: 50%; cursor: pointer;
}
.ban .slick-dots li.slick-active button {background: #2b91c8;}

/* 슬릭 갤러리 */
.gallery .gallery_btn button {
    float: left; margin: 1px 2px; display: block; 
    width: 23px; height: 23px; 
    background: url(../img/icon.png) no-repeat;
}
.gallery .gallery_btn .gb_icon1 {background-position: -150px -120px;}
.gallery .gallery_btn .gb_icon2 {background-position: -150px -143px;}
.gallery .gallery_btn .gb_icon3 {background-position: -150px -166px;}
.gallery .gallery_btn .gb_icon4 {background-position: -150px -189px;}
.gallery .gallery_btn .gb_icon1:hover {background-position: -173px -120px;}
.gallery .gallery_btn .gb_icon2:hover {background-position: -173px -143px;}
.gallery .gallery_btn .gb_icon3:hover {background-position: -173px -166px;}
.gallery .gallery_btn .gb_icon4:hover {background-position: -173px -189px;}
`)

// jsText
let jsText = [];
// 탭메뉴 js
jsText.push(`//탭메뉴
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
e.preventDefault();
var $this = $(this);
$this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);`)
// 로그인 영역
jsText.push(`//로그인 영역은 js가 들어가지 않습니다.
`) 
// 스킵 네비게이션
jsText.push(`//스킵 네비게이션 영역은 js가 들어가지 않습니다.
`)
// slick js
jsText.push(`//slick 들어간 script

//배너
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});


//갤러리
$(".gallery_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});
$(".play").click(function(){
    $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function(){
    $(".gallery_img").slick("slickPause");
});
$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function(){
    $(".gallery_img").slick("slickNext");
});
`) 

let htmlText2 = [];

// 미디어 쿼리html
htmlText2.push(``)
//두줄효과 html
htmlText2.push(`&lt;!-- 게시판2 --&gt;
&lt;div class="notice2"&gt;
    &lt;h5&gt;Notice2&lt;/h5&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다.이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다.&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다.이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다.&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다.이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다.&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다.이 줄은 두줄 효과입니다. 이 줄은 두줄 효과입니다.&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;a href="#" class="more"&gt;More &lt;i class="fas fa-plus-circle" aria-hidden="true"&gt;&lt;/i&gt;&lt;/a&gt;
&lt;/div&gt;
&lt;!-- //게시판2 --&gt;`)
//마우스오버효과 html
htmlText2.push(`&lt;!-- 마우스오버효과 --&gt;
&lt;article class="column col1"&gt;
    &lt;h4 class="col-tit"&gt;Menu&lt;/h4&gt;
    &lt;p class="col-desc"&gt;Box-shadow를 이용한 마우스 오버 효과 메뉴입니다.&lt;/p&gt;
    &lt;!-- 메뉴 --&gt;
    &lt;div class="menu"&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="#"&gt;Cafe&lt;i class="fas fa-angle-double-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;Website&lt;i class="fas fa-angle-double-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;Design&lt;i class="fas fa-angle-double-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;Coding&lt;i class="fas fa-angle-double-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;HTML5&lt;i class="fas fa-angle-double-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;CSS3&lt;i class="fas fa-angle-double-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
    &lt;!--//메뉴 --&gt;

&lt;/article&gt;`)
//라이트박스 html
htmlText2.push(`&lt;!-- 라이트 박스 --&gt;
&lt;div class="lightbox"&gt;
   &lt;a href="assets/img/light01_s.jpg"&gt;&lt;img src="assets/img/light01.jpg" alt="이미지"&gt;&lt;/a&gt;
       &lt;a href="assets/img/light02_s.jpg"&gt;&lt;img src="assets/img/light02.jpg" alt="이미지"&gt;&lt;/a&gt;
       &lt;a href="assets/img/light03_s.jpg"&gt;&lt;img src="assets/img/light03.jpg" alt="이미지"&gt;&lt;/a&gt;
       &lt;a href="assets/img/light04_s.jpg"&gt;&lt;img src="assets/img/light04.jpg" alt="이미지"&gt;&lt;/a&gt;
       &lt;a href="assets/img/light05_s.jpg"&gt;&lt;img src="assets/img/light05.jpg" alt="이미지"&gt;&lt;/a&gt;
       &lt;a href="assets/img/light06_s.jpg"&gt;&lt;img src="assets/img/light06.jpg" alt="이미지"&gt;&lt;/a&gt;
       &lt;a href="assets/img/light07_s.jpg"&gt;&lt;img src="assets/img/light07.jpg" alt="이미지"&gt;&lt;/a&gt;
       &lt;a href="assets/img/light08_s.jpg"&gt;&lt;img src="assets/img/light08.jpg" alt="이미지"&gt;&lt;/a&gt;
       &lt;a href="assets/img/light09_s.jpg"&gt;&lt;img src="assets/img/light09.jpg" alt="이미지"&gt;&lt;/a&gt;
       &lt;a href="assets/img/light10_s.jpg"&gt;&lt;img src="assets/img/light10.jpg" alt="이미지"&gt;&lt;/a&gt;
&lt;/div&gt;
&lt;!-- //라이트 박스--&gt;`)
//이미지슬라이드 html
htmlText2.push(`&lt;!-- 이미지 슬라이드 --&gt;
&lt;div class="slider"&gt;
   &lt;div&gt;
       &lt;figure&gt;
           &lt;img src="assets/img/slider001.jpg" alt="이미지1"&gt;
           &lt;figcaption&gt;&lt;em&gt;Responsive Site1&lt;/em&gt;&lt;span&gt; 슬라이드 플러그인을 이용한 이미지 슬라이드 입니다.&lt;/span&gt;&lt;/figcaption&gt;
   &lt;/div&gt;
   &lt;div&gt;
       &lt;figure&gt;
           &lt;img src="assets/img/slider001.jpg" alt="이미지2"&gt;
           &lt;figcaption&gt;&lt;em&gt;Responsive Site2&lt;/em&gt;&lt;span&gt;슬라이드 플러그인을 이용한 이미지 슬라이드 입니다.&lt;/span&gt;&lt;/figcaption&gt;
   &lt;/div&gt;
   &lt;div&gt;
       &lt;figure&gt;
           &lt;img src="assets/img/slider001.jpg" alt="이미지3"&gt;
           &lt;figcaption&gt;&lt;em&gt;Responsive Site3&lt;/em&gt;&lt;span&gt;슬라이드 플러그인을 이용한 이미지 슬라이드 입니다.&lt;/span&gt;&lt;/figcaption&gt;
   &lt;/div&gt;
&lt;/div&gt;`)
//박스새도우 html
htmlText2.push(`/*박스섀도우는 html을 지원하지 않습니다.*/`)

// cssText2
let cssText2 = [];
//미디어 쿼리 css
cssText2.push(`/*  미디어 쿼리 */
@media (max-width: 1220px){
    .container {width: 100%;}
    .row {padding: 0 15px;}
    #contents .container {border: 0;}

    .lightbox {grid-template-columns: repeat(4, 1fr);}
    .lightbox a:nth-child(5n) {display: none;}

}
@media (max-width: 1024px){
    .lightbox {grid-template-columns: repeat(3, 1fr);}
    .lightbox a:nth-child(10) {display: block;}
}

@media (max-width: 960px){
    .nav > div {float: none; width: 100%;}
    .nav > div li {width: 33.3333%;}
    .nav > div:last-of-type {width: 100%;}
    .nav > div:last-of-type li {width: 33.3333%;}
    .nav > div ul {margin-bottom: 10px;}

    #cont-right {position: static; width: 100%; border-top: 1px solid #dbdbdb; overflow: hidden;}
    
    #cont-right .column {float: left; width: 33.3333%; box-sizing: border-box;}
    #cont-right .column.col7 {border-right: 1px solid #dbdbdb; border-bottom: 0;}
    #cont-right .column.col8 {border-right: 1px solid #dbdbdb; border-bottom: 0;}
    #cont-center {margin-right: 0; border-right: 0;}

}
@media (max-width: 768px){
    #cont-left {float: none; width: 100%;}
    #cont-center {border-left: 0;}
}
@media (max-width: 600px){
    .header {height: auto;}
    .header .header-tit {display: none;}
    .header .header-icon {display: none;}
    .title .btn {display: none;}
    .col1 .col-tit {display: none;}
    .col1 .col-desc {display: none;}
    .column.col1 {padding: 0; border-bottom: 0;}
    .column.col1 .menu li a i {display: none;}
    .column.col1 .menu ul {overflow: hidden;}
    .column.col1 .menu li {float: left; width: 33.333%; text-align: center;
         border-right: 1px solid #dbdbdb; box-sizing: border-box;
    }
    .column.col1 .menu li a{color: #fff; text-shadow: 0 0 05px rgba(0,0,0,0.7);}
    .column.col1 .menu li a:hover{box-shadow: none; background: rgba(36,130,174,0.6);}
    .column.col1 .menu li:nth-child(3n) {border-right: 0;}
    .column.col2 {background: #fff;}

    .lightbox {grid-template-columns: repeat(2, 1fr);}
    .lightbox a:nth-child(9) {display: none;}
 

    .nav > div li {width: 50%;}
    .nav > div:last-of-type li {width: 50%;}

    #cont-right .column {width: 50%;}
    #cont-right .column.col8 {border-right: 0;}
    #cont-right .column.col9 {display: none;}
}
@media (max-width: 320px){
    .lightbox {grid-template-columns: repeat(1, 1fr);}
    .lightbox a:nth-child(2) {display: block;}
    #cont-right .column {width: 100%;}
    #cont-right .column.col7 {border-right: 0; border-bottom: 1px solid #dbdbdb;}
}
`)
//게시판 두줄효과 css
cssText2.push(`/*  게시판2 두줄효과 */
.notice2 {position: relative; margin-top: 15px; }
.notice2 h5{font-size: 15px; color: #2f7fa6; padding-bottom: 5px;}
.notice2 li {
    position: relative; padding-left: 8px;
    overflow: hidden; text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    max-height: 40px;
}
.notice2 li::before {
    content: '';
    width: 3px; height: 3px; background: #2f7fa6;
    position: absolute; left: 0; top: 8px;
}`)
//마우스오버효과css
cssText2.push(`/* 마우스오버효과 */
.menu li {position: relative;}
.menu li a {
    font-size: 16px; text-transform: uppercase; color: #878787;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px; display: block;
    transition: box-shadow 0.34s ease, background 0.34s ease, color 0.3s;
 }
.menu li a i {position: absolute; top: 15px; right: 10px; font-size: 12px;}
.menu li a:hover {
    box-shadow: inset 180px 0 0 0 rgba(36,130,174,0.7);
    color: #fff;
    background: rgba(36,130,174,0.9);
}`)
//라이트 박스css
cssText2.push(`/* 라이트 박스 */
.lightbox a {float: left; width: 19%; margin: 0.5%;  display: flex}
.lightbox {display: flex; flex-wrap: wrap; justify-content: space-between; align-content: space-between; }
.lightbox a {width: 19%; margin-bottom: 1%;}`)
//이미지 슬라이드 css
cssText2.push(`/*이미지 슬라이드 */
.slider figure {position: relative;}
.slider figcaption {
    position: absolute; bottom: 0; left: 0; 
    width: 100%; padding: 20px; box-sizing: border-box;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    font-size: 18px;
}
.slider figcaption em {
    display: block; font-weight: bold; font-size: 28px;
    text-transform: uppercase; font-family: 'Abel';
    opacity: 0; transform: translateX(50px);
    transition: all 0.8s 0.3s ease;
}
.slider .slick-active figcaption em{
    opacity: 1; transform: translateX(0);
}
.slider figcaption span {
    display: block;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    opacity: 0; transform: translateX(50px);
    transition: all 0.8s 0.3s ease;
}
.slider .slick-active figcaption span {
    opacity: 1; transform: translateX(0);
}
.slider .slick-dots {display: block; width: 100%; text-align: center;}
.slider .slick-dots li {display: inline-block; width: 15px; height: 15px; margin: 5px;}
.slider .slick-dots li button {
    font-size: 0; line-height: 0; border: 0;
    display: block; width: 15px; height: 15px;
    cursor: pointer; background: #5dbfeb;
    border-radius: 50%;
}
.slider .slick-dots li.slick-active button {background: #2b91c8;}
.slider .slick-prev {
    position: absolute; left: 0; bottom: 0; z-index: 1000;
    display: inline-block;
    padding: 0 5px;
    background: #2b91c8; color: #fff;
    border: 0; border-radius: 3px; cursor: pointer;
}
.slider .slick-next {
    position: absolute; right: 0; bottom: 0; z-index: 1000;
    display: inline-block; padding: 0 5px;
    background: #2b91c8; color: #fff;
    border: 0; border-radius: 3px; cursor: pointer;
}`)
//박스 새도우 css
cssText2.push(`/*박스 섀도우 */
    .header .header-tit h1:hover {
    box-shadow: 
    inset -250px 0 0 0 #4587a6,
    inset 250px 0 0 0 #4587a6;
}
.header .header-tit a {
    color: #fff; background: #4a9abf; 
    font-size: 16px;padding: 10px 20px; 
    margin-top: -7px;  transition: 1s;
}
.header .header-tit a:hover {
    box-shadow: 
    0 0 0 40px rgba(225,225,225,0);
    animation: pulse 1s;
}
@keyframes pulse{
    0% {box-shadow: 0 0 0 0 #2079a2;}
}`)

// jsText2
let jsText2 = [];
//미디어 쿼리 js
jsText2.push(`/*script.js가 사용되지 않았습니다.*/`)
// 게시판2 두줄효과
jsText2.push(`jscript.js가 사용되지 않았습니다.`)
//마우스오버효과js
jsText2.push(`script.js가 사용되지 않았습니다.`)
//라이트 박스js
jsText2.push(`// 라이트 박스
    $(document).ready(function(){
    $(".lightbox").lightGallery();

    // 슬릭 이미지 슬라이드
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    //fade: true,
    //pauseOnDotsHover: false,
    //slidesToShow: 3,
    //slidesToScroll: 3
});
});`)
//슬릭 이지미 슬라이드
jsText2.push(`/*슬릭 이미지 슬라이드*/
$(document).ready(function(){
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    //fade: true,
    //pauseOnDotsHover: false,
    //slidesToShow: 3,
    //slidesToScroll: 3
});
});`)
// 박스 새도우 js
jsText2.push(`script.js가 사용되지 않았습니다.`)


// htmlText3
let htmlText3 = [];
//Swiper html
htmlText3.push(`/*Swiper html*/
&lt;section id="banner"&gt;
&lt;div class="swiper-container"&gt;
    &lt;div class="swiper-wrapper"&gt;
        &lt;div class="swiper-slide"&gt;
            &lt;img src="assets/img/banner01.jpg" alt="행복한 가치를 원합니다."&gt;
            &lt;h2&gt;행복한 가치를 원합니다.&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div class="swiper-slide"&gt;
            &lt;img src="assets/img/banner02.jpg" alt="인생을 맛있게, 농심"&gt;
            &lt;h2&gt;인생을 맛있게, 농심&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div class="swiper-slide"&gt;
            &lt;img src="assets/img/banner03.jpg" alt="Spice Up Your Life"&gt;
            &lt;h2&gt;Spice Up Your Life &lt;br&gt; 인생을 맛있게, 농심&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div class="swiper-slide"&gt;
            &lt;img src="assets/img/banner04.jpg" alt="일상의 가치를 더합니다."&gt;
            &lt;h2&gt;일상의 가치를 더합니다.&lt;/h2&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="swiper-pagination"&gt;&lt;/div&gt;
    &lt;div class="swiper-button-prev"&gt;&lt;/div&gt;
    &lt;div class="swiper-button-next"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="btn-quick"&gt;
    &lt;a href="#"&gt;&lt;img src="assets/img/icon-arrow.svg" alt="다음 섹션 가기"&gt;&lt;/a&gt;
&lt;/div&gt;
&lt;/section&gt;
&lt;!-- //banner --&gt;

&lt;section id="news"&gt;
    &lt;h2&gt;내일을 위한 새롭고 활기찬 농심 소식&lt;/h2&gt;
    &lt;div class="notice"&gt;
        &lt;div class="swiper-container"&gt;
            &lt;div class="swiper-wrapper"&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;figure&gt;
                        &lt;img src="assets/img/sbanner01.jpg" alt="농심1"&gt;
                    &lt;/figure&gt;
                    &lt;div class="info"&gt;
                        &lt;h3&gt;농심, 가벼운 한 끼 식사 ‘옥수수면’ 출시&lt;/h3&gt;
                        &lt;time&gt;2020.02.20&lt;/time&gt;
                        &lt;a href="#" class="more"&gt;more&lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;figure&gt;
                        &lt;img src="assets/img/sbanner02.jpg" alt="농심1"&gt;
                    &lt;/figure&gt;
                    &lt;div class="info"&gt;
                        &lt;h3&gt;농심, 칼국수 면발의 비빔면 ‘칼빔면’ 출시&lt;/h3&gt;
                        &lt;time&gt;2020.02.20&lt;/time&gt;
                        &lt;a href="#" class="more"&gt;more&lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;figure&gt;
                        &lt;img src="assets/img/sbanner03.jpg" alt="농심1"&gt;
                    &lt;/figure&gt;
                    &lt;div class="info"&gt;
                        &lt;h3&gt;농심, ‘짜파구리’ 용기면으로 글로벌 시장&lt;/h3&gt;
                        &lt;time&gt;2020.02.20&lt;/time&gt;
                        &lt;a href="#" class="more"&gt;more&lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;figure&gt;
                        &lt;img src="assets/img/sbanner04.jpg" alt="농심1"&gt;
                    &lt;/figure&gt;
                    &lt;div class="info"&gt;
                        &lt;h3&gt;농심, 둥지냉면 광고모델로 음문석ㆍ김민아 발탁&lt;/h3&gt;
                        &lt;time&gt;2020.02.20&lt;/time&gt;
                        &lt;a href="#" class="more"&gt;more&lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;figure&gt;
                        &lt;img src="assets/img/sbanner05.jpg" alt="농심1"&gt;
                    &lt;/figure&gt;
                    &lt;div class="info"&gt;
                        &lt;h3&gt;농심, 효과 빠른 ‘라이필 더마 콜라겐’ 출시&lt;/h3&gt;
                        &lt;time&gt;2020.02.20&lt;/time&gt;
                        &lt;a href="#" class="more"&gt;more&lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;figure&gt;
                        &lt;img src="assets/img/sbanner01.jpg" alt="농심1"&gt;
                    &lt;/figure&gt;
                    &lt;div class="info"&gt;
                        &lt;h3&gt;농심, 가벼운 한 끼 식사 ‘옥수수면’ 출시&lt;/h3&gt;
                        &lt;time&gt;2020.02.20&lt;/time&gt;
                        &lt;a href="#" class="more"&gt;more&lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;figure&gt;
                        &lt;img src="assets/img/sbanner02.jpg" alt="농심1"&gt;
                    &lt;/figure&gt;
                    &lt;div class="info"&gt;
                        &lt;h3&gt;농심, 칼국수 면발의 비빔면 ‘칼빔면’ 출시&lt;/h3&gt;
                        &lt;time&gt;2020.02.20&lt;/time&gt;
                        &lt;a href="#" class="more"&gt;more&lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;figure&gt;
                        &lt;img src="assets/img/sbanner03.jpg" alt="농심1"&gt;
                    &lt;/figure&gt;
                    &lt;div class="info"&gt;
                        &lt;h3&gt;농심, ‘짜파구리’ 용기면으로 글로벌 시장&lt;/h3&gt;
                        &lt;time&gt;2020.02.20&lt;/time&gt;
                        &lt;a href="#" class="more"&gt;more&lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;figure&gt;
                        &lt;img src="assets/img/sbanner04.jpg" alt="농심1"&gt;
                    &lt;/figure&gt;
                    &lt;div class="info"&gt;
                        &lt;h3&gt;농심, 둥지냉면 광고모델로 음문석ㆍ김민아 발탁&lt;/h3&gt;
                        &lt;time&gt;2020.02.20&lt;/time&gt;
                        &lt;a href="#" class="more"&gt;more&lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;figure&gt;
                        &lt;img src="assets/img/sbanner05.jpg" alt="농심1"&gt;
                    &lt;/figure&gt;
                    &lt;div class="info"&gt;
                        &lt;h3&gt;농심, 효과 빠른 ‘라이필 더마 콜라겐’ 출시&lt;/h3&gt;
                        &lt;time&gt;2020.02.20&lt;/time&gt;
                        &lt;a href="#" class="more"&gt;more&lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;a href="#" class="notice-btn"&gt;농심소식&lt;/a&gt;
    &lt;/div&gt;
&lt;/section&gt;`)
//fadein, fadeout html
htmlText3.push(`&lt;!-- header2 html --&gt;
&lt;div class="header2"&gt;
    &lt;h1&gt;&lt;a href="../../nongshim/index.html"&gt;&lt;img src="../../nongshim/assets/img/logo.svg" alt=""&gt;&lt;/a&gt;&lt;/h1&gt;
    &lt;ul class="h-menu"&gt;
        &lt;li class="active2"&gt;&lt;span&gt;농심소개&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="../yulchon/yulchon.html"&gt;&lt;span&gt;지속경영&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;span&gt;홍보센터&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;&lt;span&gt;투자정보&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;&lt;span&gt;고객지원&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;N.LIVE&lt;/li&gt;
    &lt;/ul&gt;
    &lt;ul class="h-side"&gt;
        &lt;li&gt;&lt;span&gt;&lt;i class="fas fa-search"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;&lt;span&gt;&lt;i class="far fa-user"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;&lt;span&gt;&lt;i class="far fa-comment-alt"&gt;&lt;/i&gt;&lt;em&gt;Kr&lt;/em&gt;&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;&lt;span&gt;&lt;i class="fas fa-bars"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;

&lt;!-- header4 html --&gt;
&lt;div class="header4"&gt;
    &lt;section class="header4-up"&gt;
        &lt;div&gt;
            &lt;ul&gt;
                &lt;li&gt;OVERVIEW&lt;/li&gt;
                &lt;li&gt;&lt;/li&gt;
                &lt;li&gt;&lt;/li&gt;
                &lt;span&gt;&lt;i class="fas fa-chevron-right"&gt;&lt;/i&gt;&lt;/span&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div&gt;
            &lt;ul&gt;
                &lt;li&gt;경영이념&lt;/li&gt;
                &lt;li&gt;경영이념&lt;/li&gt;
                &lt;li&gt;농심WAY&lt;/li&gt;
                &lt;span&gt;&lt;i class="fas fa-chevron-right"&gt;&lt;/i&gt;&lt;/span&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div&gt;
            &lt;ul&gt;
                &lt;li&gt;연혁&lt;/li&gt;
                &lt;li&gt;&lt;/li&gt;
                &lt;li&gt;&lt;/li&gt;
                &lt;span&gt;&lt;i class="fas fa-chevron-right"&gt;&lt;/i&gt;&lt;/span&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div&gt;
            &lt;ul&gt;
                &lt;li&gt;세계속의 농심&lt;/li&gt;
                &lt;li&gt;&lt;/li&gt;
                &lt;li&gt;&lt;/li&gt;
                &lt;span&gt;&lt;i class="fas fa-chevron-right"&gt;&lt;/i&gt;&lt;/span&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
    &lt;/section&gt;
    &lt;section class="header4-down"&gt;
        &lt;div class="h4d1"&gt;
            &lt;ul&gt;
                &lt;li&gt;CI소개&lt;/li&gt;
                &lt;li&gt;&lt;/li&gt;
                &lt;li&gt;&lt;/li&gt;
                &lt;span&gt;&lt;i class="fas fa-chevron-right"&gt;&lt;/i&gt;&lt;/span&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div class="h4d2"&gt;
            &lt;p class="h4d2span"&gt;농심그룹&lt;/p&gt;
            &lt;div&gt;
                &lt;ul&gt;
                    &lt;li&gt;농심홀딩스&lt;/li&gt;
                    &lt;li&gt;태경농산&lt;/li&gt;
                    &lt;li&gt;농심기획&lt;/li&gt;
                    &lt;li&gt;농심미분&lt;/li&gt;
                &lt;/ul&gt;
                &lt;ul&gt;
                    &lt;li&gt;율촌화학&lt;/li&gt;
                    &lt;li&gt;농심엔지니어링&lt;/li&gt;
                    &lt;li&gt;호텔농심&lt;/li&gt;
                    &lt;li&gt;율촌재단&lt;/li&gt;
                &lt;/ul&gt;
                &lt;ul&gt;
                    &lt;li&gt;메가마트&lt;/li&gt;
                    &lt;li&gt;엔디에스&lt;/li&gt;
                    &lt;li&gt;농심개발&lt;/li&gt;                            
                &lt;/ul&gt;
            &lt;/div&gt;
            &lt;span&gt;&lt;i class="fas fa-chevron-right"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;/div&gt;
        
    &lt;/section&gt;
&lt;/div&gt;`)
//header1 html
htmlText3.push(`/*header1 html*/
&lt;div class="header1"&gt;
    &lt;ul&gt;
        &lt;li class="active1"&gt;&lt;span&gt;농심&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;&lt;span&gt;브랜드&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;&lt;span&gt;누들푸들&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;&lt;span&gt;농심채용&lt;/span&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
`)
//z-index html
htmlText3.push(`/*z-index html*/
&lt;!-- contents5 --&gt;
&lt;section class="contents5"&gt;
   &lt;div class="cont5-wrap"&gt;
       &lt;div class="cont5-box"&gt;&lt;img src="assets/img/imgslide1.jpg" alt="#"&gt;&lt;span&gt;OVERVIEW&lt;/span&gt;&lt;/div&gt;
       &lt;div class="cont5-box"&gt;&lt;img src="assets/img/imgslide2.jpg" alt="#"&gt;&lt;span&gt;경영이념&lt;/span&gt;&lt;/div&gt;
       &lt;div class="cont5-box"&gt;&lt;img src="assets/img/imgslide3.jpg" alt="#"&gt;&lt;span&gt;연혁&lt;/span&gt;&lt;/div&gt;
       &lt;div class="cont5-box"&gt;&lt;img src="assets/img/imgslide4.jpg" alt="#"&gt;&lt;span&gt;세계속의 농심&lt;/span&gt;&lt;/div&gt;
       &lt;div class="cont5-box"&gt;&lt;img src="assets/img/imgslide5.jpg" alt="#"&gt;&lt;span&gt;CI소개&lt;/span&gt;&lt;/div&gt;
       &lt;div class="cont5-box"&gt;&lt;img src="assets/img/imgslide6.jpg" alt="#"&gt;&lt;span&gt;농심그룹&lt;/span&gt;&lt;/div&gt;
   &lt;/div&gt;
   &lt;div class="cont5-btn"&gt;&lt;/div&gt;
   &lt;div class="cont5-slide"&gt;&lt;/div&gt;
&lt;/section&gt;
`)
//header html
htmlText3.push(`&lt;!-- header html --&gt;
&lt;header id="header" class="white"&gt;
&lt;div class="header"&gt;
    &lt;h1&gt;
    &lt;svg x="0px" y="0px" width="133.5px" height="42.66px" viewBox="0 0 133.5 42.66"&gt;
        &lt;path class="tx" d="M122.1,20.287c0.016,1.912,1.549,3.463,3.461,3.463c1.914,0,3.463-1.55,3.463-3.463v-9.566
            c0-1.913-1.549-3.463-3.463-3.463c-1.912,0-3.461,1.55-3.461,3.463l0.016,5.645c0,0-0.436,1.881-2.495,1.961
            c-2.062,0.079-7.646-2.813-9.688-8.158c-0.73-1.786-1.748-2.495-3.326-2.495c-1.562,0-2.883,0.995-3.313,2.456
            c-1.935,6.374-6.489,8.345-7.916,8.444c-1.11,0.109-1.862,0.833-1.862,1.812c0,0.98,0.752,1.624,1.902,1.624
            c2.495,0,7.487-1.544,11.25-5.585C110.667,20.347,118.896,23.912,122.1,20.287" /&gt;
        &lt;path class="tx"
            d="M57.05,16.928c-1,0-1.81-0.81-1.81-1.81l0.011-4.872c0-1.912,1.55-3.463,3.463-3.463
            c1.912,0,3.424,1.551,3.424,3.463v3.09h19.838c2.229,0,2.908-0.488,3.615-0.713c0.989-0.317,2.092-0.103,2.512,0.84
            c0.42,0.943-0.072,1.885-0.875,2.404c-0.805,0.519-2.607,1.034-5.252,1.034h-7.575v1.902l13.726,0.032c1,0,1.81,0.81,1.81,1.81
            c0,0.999-0.81,1.809-1.81,1.809H54.673c-0.999,0-1.809-0.81-1.809-1.809c0-1,0.81-1.81,1.809-1.81l12.954-0.032V16.9L57.05,16.928z" /&gt;
        &lt;path class="tx" d="M54.529,30.211c0-3.925,7.487-7.108,16.723-7.108c9.234,0,16.722,3.183,16.722,7.108
            s-7.487,7.107-16.722,7.107C62.017,37.318,54.529,34.136,54.529,30.211 M71.252,33.908c5.383,0,9.748-1.655,9.748-3.697
            s-4.365-3.697-9.748-3.697c-5.385,0-9.749,1.655-9.749,3.697S65.867,33.908,71.252,33.908" /&gt;
        &lt;path class="tx" d="M96.835,25.754c0-1,0.81-1.809,1.81-1.809h28.641c0.999,0,1.809,0.809,1.809,1.809v8.022
            c0,0.999-0.81,1.81-1.809,1.81H98.645c-1,0-1.81-0.811-1.81-1.81V25.754z M103.695,31.994h18.42v-4.517h-18.42V31.994z" /&gt;
        &lt;path fill="#FFFFFF" d="M25.378,42.66c13.35,0,24.171-9.229,24.171-20.609c0-11.383-10.821-20.61-24.171-20.61
            c-13.349,0-24.171,9.227-24.171,20.61C1.207,33.432,12.029,42.66,25.378,42.66" /&gt;
        &lt;path fill="#E50013" d="M2.938,22.051c0-10.568,10.047-19.134,22.44-19.134c12.394,0,22.44,8.566,22.44,19.134
            c0,10.566-10.046,19.133-22.44,19.133C12.985,41.184,2.938,32.617,2.938,22.051 M25.378,25.294c3.937,0,7.128-4.593,7.128-10.259
            c0-5.665-3.191-10.259-7.128-10.259s-7.127,4.594-7.127,10.259C18.251,20.701,21.441,25.294,25.378,25.294" /&gt;
    &lt;/svg&gt;
&lt;/h1&gt;

&lt;nav id="nav" class="nav"&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="sub3/index.html"&gt;&lt;span&gt;농심소개&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="sub2/index.html"&gt;&lt;span&gt;지속가능경영&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="../nongshim2/sub/sub1.html"&gt;&lt;span&gt;홍보센터&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="sub1/index.html"&gt;&lt;span&gt;투자정보&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="../nongshim2/sub/sub2.html"&gt;&lt;span&gt;고객지원&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;li class="live"&gt;&lt;a href="sub/index.html"&gt;&lt;em&gt;N.LIVE&lt;/em&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;
&lt;ul class="side-nav"&gt;
    &lt;li&gt;&lt;a href="#"&gt;&lt;img src="assets/img/icon-search.svg" alt="검색"&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;&lt;img src="assets/img/icon-account.svg" alt="로그인"&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;&lt;img src="assets/img/icon-language.svg" alt="언어"&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;&lt;img src="assets/img/icon-menu.svg" alt="전체메뉴"&gt;&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/header&gt;
&lt;!-- //header --&gt;`)
//scroll Top html
htmlText3.push(`/*Scroll Top html*/
&lt;main id="contents"&gt;
    &lt;section id="banner"&gt;
        &lt;div class="swiper-container"&gt;
            &lt;div class="swiper-wrapper"&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;img src="assets/img/banner01.jpg" alt="행복한 가치를 원합니다."&gt;
                    &lt;h2&gt;행복한 가치를 원합니다.&lt;/h2&gt;
                &lt;/div&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;img src="assets/img/banner02.jpg" alt="인생을 맛있게, 농심"&gt;
                    &lt;h2&gt;인생을 맛있게, 농심&lt;/h2&gt;
                &lt;/div&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;img src="assets/img/banner03.jpg" alt="Spice Up Your Life"&gt;
                    &lt;h2&gt;Spice Up Your Life &lt;br&gt; 인생을 맛있게, 농심&lt;/h2&gt;
                &lt;/div&gt;
                &lt;div class="swiper-slide"&gt;
                    &lt;img src="assets/img/banner04.jpg" alt="일상의 가치를 더합니다."&gt;
                    &lt;h2&gt;일상의 가치를 더합니다.&lt;/h2&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="swiper-pagination"&gt;&lt;/div&gt;
            &lt;div class="swiper-button-prev"&gt;&lt;/div&gt;
            &lt;div class="swiper-button-next"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="btn-quick"&gt;
            &lt;a href="#"&gt;&lt;img src="assets/img/icon-arrow.svg" alt="다음 섹션 가기"&gt;&lt;/a&gt;
        &lt;/div&gt;
    &lt;/section&gt;
&lt;/main&gt;
`)




// cssText3
let cssText3 = [];
//Swiper css
cssText3.push(`/*Swiper css*/
/* 배너  */
#banner {
  position: relative;
}

#banner .swiper-slide h2 {
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 82px;
  color: #fff;
  font-weight: 700;
  white-space: nowrap;
}

#banner .btn-quick a {
  position: absolute;
  left: 50%;
  bottom: -25px;
  z-index: 1000;
  width: 50px;
  height: 50px;
  margin-left: -25px;
  background: #96c11f;
  -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

#banner .btn-quick a img {
  width: 30px;
  -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
  padding-top: 20px;
}

#banner .swiper-pagination .icon-pause {
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: 80px;
  width: 30px;
}

#banner .swiper-pagination .icon-play {
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: 80px;
  width: 30px;
}

/* 뉴스 */
#news {
  padding: 115px 0 150px 0;
  text-align: center;
}

#news h2 {
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 60px;
}

.notice .swiper-slide:nth-child(even) {
  margin-top: 100px;
}

.notice .swiper-slide {
  width: 458px;
}

.notice .swiper-slide .info {
  position: relative;
  text-align: left;
  padding: 30px 40px;
}

.notice .swiper-slide .info h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
}

.notice .swiper-slide .info time {
  color: #999;
  font-size: 14px;
}

.notice .swiper-slide .info a {
  position: absolute;
  right: 40px;
  bottom: 30px;
  text-transform: uppercase;
  color: #999;
  padding-right: 40px;
  display: none;
}

.notice .swiper-slide .info a::before {
  content: '';
  width: 30px;
  height: 2px;
  background: #ca0202;
  position: absolute;
  right: 0;
  top: 8px;
}

.notice .swiper-slide .info a::after {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ca0202;
  position: absolute;
  right: 0;
  top: 6px;
}

.notice .swiper-slide:hover a {
  display: block;
}

.notice .notice-btn {
  font-size: 18px;
  color: #ca0202;
  border-radius: 30px;
  border: 1px solid #ca0202;
  padding: 10px 80px;
  margin-top: 80px;
  display: inline-block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.notice .notice-btn:hover {
  background: #ca0202;
  color: #fff;
}`)
//fadein, fadeout css
cssText3.push(`/*header2 css*/
.header2 {
    display: flex;
    justify-content: space-between;
    background: #fff;
}
.header2 h1 {
    padding: 25px 0 0 60px;
}
.header2 .h-menu {
    padding: 25px 130px;
}
.header2 .h-menu li {
    display: inline;
    font-size: 19px;
    padding: 3px 25px;
    cursor: pointer;
    font-weight: bold;
    box-sizing: border-box;    
}
.header2 .h-menu li span {
    position: relative;    
}
.header2 .h-menu li span::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -3px; left: 50%;
    width: 0px;
    height: 0;
    border-top: 2px solid #d83832;
    transform: translateX(-50%);
    transition: all 0.3s;
}
.header2 .h-menu li:hover span::before {
    width: 75px;
}
/* .header2 .h-menu li:hover {
    border-bottom: 3px solid red;
}
.header2 .h-menu li.active2 {
    border-bottom: 3px solid red;
} */
.header2 .h-menu li:last-child {
    border: solid 1px;
    border-radius: 20px;
    padding: 4px 17px 5px 17px ;
    position: relative;
    z-index: 0;
    background: #fff;
    background-clip: padding-box;
}
.header2 .h-side {
    margin-right: 60px;
}
.header2 .h-side li {
    display: inline-block;
    font-size: 25px;
    font-weight: 100;
    padding: 24px 15px;
    cursor: pointer;
}
.header2 .h-side li .far fa-comment-alt{
    position: relative;
}
.header2 .h-side li em {
    font-size: 13px;
    position: absolute; top: 7px; left: 6px;
}
.header2 .h-side li span {
    position: relative;    
}
.header2 .h-side li span::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -3px; left: 50%;
    width: 0px;
    height: 0;
    border-top: 2px solid #d83832;
    transform: translateX(-50%);
    transition: all 0.3s;
}
.header2 .h-side li:hover span::before {
    width: 25px;
}

/*header4 css*/
.header4 {
    border-top: 1px solid #ccc;
    padding: 0 350px;
    background: #fff;
    margin-top: -70px;
    display: none;
}
.header4 .header4-up {
    display: flex;
}
.header4 .header4-up div {
    flex-grow: 1;
    margin-left: 3%;
    position: relative;
}
.header4 .header4-up div span {   
    position: absolute; top: 48px; right: 0;
    border: 1px solid gainsboro;
    border-radius: 50%;
    font-size: 11px;
    padding: 0 5px 2px 7px;
}
.header4 .header4-up div li {
    font-size: 18px;
    margin-bottom: 10px;
}
.header4 .header4-up div li:first-child {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 4px;
    margin: 40px 0 15px 0;
    border-bottom: 1px solid #ccc;
}
.header4 .header4-down {
    display: flex;
}
.header4 .header4-down .h4d1 {
    flex-grow: 1;
    margin-left: 3%;   
    position: relative; 
}
.header4 .header4-down .h4d1 li:first-child {
    width: 280px;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 4px;
    margin: 40px 0 15px 0;
    border-bottom: 1px solid #ccc;
    
}
.header4 .header4-down .h4d1 span {
    position: absolute; top: 48px; left: 260px;
    border: 1px solid gainsboro;
    border-radius: 50%;
    font-size: 11px;
    padding: 0 5px 2px 7px;
}
.header4 .header4-down .h4d2 {
    flex-grow: 2;
    margin-left: -95px;
    position: relative;
}
.header4 .header4-down .h4d2 p {
    width: 510px;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 4px;
    margin: 40px 0 15px 0;
    border-bottom: 1px solid #ccc;
}
.header4 .header4-down .h4d2 div {
    display: flex;
    margin-bottom: 80px;
}
.header4 .header4-down .h4d2 div ul {
    margin-right: 100px;
}
.header4 .header4-down .h4d2 div ul li {
    font-size: 18px;
    margin-bottom: 10px;
}
.header4 .header4-down .h4d2 span {
    position: absolute; top: 48px; left: 490px;
    border: 1px solid gainsboro;
    border-radius: 50%;
    font-size: 11px;
    padding: 0 5px 2px 7px;
}
`)
//header1 css 
cssText3.push(`/*header1 cursor:pointer css*/
.header1 {
    text-align: center;
    background: #f4f4f4;    
}
.header1 ul li {
    display: inline-block;
    padding: 14px 70px ;
    font-size: 15px;
    font-weight: bold;
    color: #999999;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
}
.header1 ul li span::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -1px; left: 50%;
    width: 0px;
    height: 0;
    border-top: 3px solid #96c11f;
    transform: translateX(-50%);
    transition: all 0.3s;
}
.header1 ul li:nth-child(2) span::before {
    border-top:3px solid red;
}
.header1 ul li:nth-child(3) span::before {
    border-top:3px solid orange;
 }
.header1 ul li:last-child span::before {
    border-top:3px solid skyblue;
 }

.header1 ul li:hover span::before {
    width: 150px;    
}
.header1 ul li:hover {
    color: black;
}
`)
//z-index css
cssText3.push(`/*z-index css*/
.contents5 .cont5-wrap .cont5-box span {    
    font-size: 28px;
    font-weight: bold;
    color: white;
    z-index: 1;
    /* position: absolute; top: 50%; left: 40%; */
}
`)
//position:fixed css
cssText3.push(`/*position:fixed css*/
#header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
  }
`)
//scrollTop css
cssText3.push(`위에 CSS와 겹치는 내용이여서 생략 하겠습니다.`)

//jsText3
let jsText3 = [];
//Swiper js
jsText3.push(`/*Swiper js*/
    var mySwiper = new Swiper ('#banner .swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
      }
  })

  var mySwiper2 = new Swiper ('.notice .swiper-container', {
    loop: true,
    spaceBetween: 60,
    slidesPerView: 'auto',
    centeredSlides: true
  })`)
//fadein js
jsText3.push(`/*fadeIn은 선택한 요소의 CSS opacity 속성값을 높여가며 요소를 나타지게 하고, 
fadeOut는 선택한 요소의 CSS opacity 속성값을 높여가며 요소를 사라지게 함.
*/
// 헤더오버효과 
    $(".header2 .h-menu .active2").hover(function(){
        // $(".header4").css("margin-top","-70px");
        $(".header4").fadeIn(300);
    },
    function(){
        // $(".header4").css("margin-top","-700px");
        $(".header4").fadeOut(300);
    });
    // 헤더4오버효과
    $(".header4").hover(function(){
        $(".header4").fadeIn(0);
    },function(){
        $(".header4").fadeOut(300);
});   
`)
//header1 js
jsText3.push(`script.js가 사용되지 않았습니다.`)
//z-index js
jsText3.push(`script.js가 사용되지 않았습니다.`)
//position:fixed js
jsText3.push(`script.js가 사용되지 않았습니다.`)
//scroll Top js
jsText3.push(`/*scrollTop js*/
$(document).ready(function(){

    $(window).scroll(function(){
        const scrollTop = $(window).scrollTop() + $(window).height()/2;

        $("#contents > section").each(function(){
            if(scrollTop > $(this).offset().top){
                $(this).addClass("show");
            }
        });
    })
`)

let htmlText4 = [];
//원스크롤 html
htmlText4.push(`&lt;!DOCTYPE html&gt;
&lt;html lang="ko"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;meta name="title" content="seogaandcook"&gt;
    &lt;meta name="author" content="zzekqls"&gt;
    &lt;meta name="description" content="서가 앤쿡은 한국에 본사를 둔 S & S Company의 레스토랑 체인입니다."&gt;
    &lt;meta name="keywords" content="레스토랑"&gt;
    &lt;title&gt;서가앤쿡&lt;/title&gt;

    &lt;!-- meta --&gt;
    &lt;meta property="og:type" content="article"&gt;
    &lt;meta property="og:title" content="서가앤쿡"&gt;
    &lt;meta property="og:url" content="http://zzekqls.dothome.co.kr"&gt;
    &lt;!-- &lt;meta property="og:url" content="http://www.seogaandcook.co.kr"&gt; --&gt;
    &lt;meta property="og:site_name" content="서가앤쿡"&gt;
    &lt;meta property="og:description" content="좋은 사람들과 함께하는 패밀리 레스토랑, 서가앤쿡입니다. "&gt;
    &lt;meta name="description" content="좋은 사람들과 함께하는 패밀리 레스토랑, 서가앤쿡입니다. "&gt;
    &lt;meta property="og:image" content="http://snsbrand.co.kr/sns/img/common/logo.png"&gt;
    &lt;meta name="naver-site-verification" content="e555f3f31732700400ee5e564385487ec5a05768"/&gt;
    &lt;meta name="keywords" content="BRAND STORY,MENU,스테이크샐러드(steak salad),파스타(pasta),필라프(pilaf),샐러드(salad),피자(pizza),STORE"&gt;

    &lt;!-- style --&gt;
    &lt;link rel="stylesheet" href="assets/css/style.css"&gt;
    &lt;link rel="stylesheet" href="assets/css/reset.css"&gt;
    &lt;link rel="stylesheet" href="assets/css/swiper.css"&gt;

    &lt;!-- 웹폰트 --&gt;
    &lt;link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;669;700;800;900&display=swap" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body style="overflow-y:hidden"&gt;
&lt;!-- 헤더 팝업창 알림 --&gt;
&lt;div id="submenuwrap"&gt;
    &lt;ul class="submenu"&gt;
         &lt;li class="title"&gt;
             &lt;a href="#"&gt;&lt;span&gt;about us&lt;/span&gt;&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;about us&lt;/a&gt;
         &lt;/li&gt;
         &lt;li class="title"&gt;
             &lt;a href="#"&gt;&lt;span&gt;work&lt;/span&gt;&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;work&lt;/a&gt;
         &lt;/li&gt;
         &lt;li class="title"&gt;
             &lt;a href="#"&gt;&lt;span&gt;S&S story&lt;/span&gt;&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;s&s story&lt;/a&gt;
         &lt;/li&gt;
         &lt;li class="title"&gt;
             &lt;a href="#"&gt;&lt;span&gt;brand&lt;/span&gt;&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;all brand&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;서가앤쿡&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;소싯적&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;토끼정&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;숨쉬는 순두부&lt;/a&gt;
         &lt;/li&gt;
         &lt;li class="title"&gt;
             &lt;a href="#"&gt;&lt;span&gt;people&lt;/span&gt;&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;people&lt;/a&gt;
         &lt;/li&gt;
         &lt;li class="title"&gt;
             &lt;a href="#"&gt;&lt;span&gt;community&lt;/span&gt;&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;news&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;s&s timeline&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;event&lt;/a&gt;
         &lt;/li&gt;
    &lt;/ul&gt;
    &lt;a href="#" class="close"&gt;
        &lt;svg viewBox="0 0 24 24"&gt;
       &lt;path d="M14.1,12L22,4.1c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0L12,9.9L4.1,2C3.5,1.4,2.5,1.4,2,2C1.4,2.5,1.4,3.5,2,4.1
L9.9,12L2,19.9c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l7.9-7.9l7.9,7.9c0.3,0.3,0.7,0.4,1.1,0.4
s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L14.1,12z"/&gt;
        &lt;/svg&gt;
     &lt;/a&gt;
 &lt;/div&gt;
    

 &lt;!-- 사이드 메뉴 만들기 --&gt;
 &lt;div id="slidemenu"&gt;
     &lt;div class="slidemenu sidmenu"&gt;
         &lt;a href="#banner" class="active1"&gt;&lt;/a&gt;
         &lt;a href="#contentwrap"&gt;&lt;/a&gt;
         &lt;a href="#contwrap2"&gt;&lt;/a&gt;
         &lt;a href="#contwrap3"&gt;&lt;/a&gt;
         &lt;a href="#joy"&gt;&lt;/a&gt;
     &lt;/div&gt;
 &lt;/div&gt;


    &lt;div class="wrap"&gt;
        &lt;div class="header bgs" style="position: fixed;"&gt;
            &lt;div class="header area"&gt;
                &lt;a href="#"&gt;
                    &lt;img src="assets/icons/logo.png" alt="서가앤쿡 로고"&gt;
                &lt;/a&gt;
                &lt;div class="menus"&gt;
                    &lt;a href="#" class="topmeau on"&gt;about us&lt;/a&gt;
                    &lt;a href="#" class="topmeau"&gt;work&lt;/a&gt;
                    &lt;a href="#" class="topmeau"&gt;S&S STORY&lt;/a&gt;
                    &lt;a href="#" class="topmeau"&gt;BRAND&lt;/a&gt;
                    &lt;a href="#" class="topmeau"&gt;PEOPLE&lt;/a&gt;
                    &lt;a href="#" class="topmeau"&gt;COMMUNITY&lt;/a&gt;
                &lt;/div&gt;
                
                &lt;div class="sidemenu"&gt;
                    &lt;a href="#" class="side"&gt;
                        &lt;img src="assets/icons/top_panel.png" alt="상단 메뉴"&gt;
                    &lt;/a&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;!-- //header --&gt;


        &lt;section id="banner"&gt;
            &lt;div class="swiper-container"&gt;
                &lt;div class="swiper-wrapper"&gt;
                    &lt;div class="swiper-slide"&gt;
                        &lt;img src="assets/img/banner1" alt="음식"&gt;
                    &lt;/div&gt;
                    &lt;div class="swiper-slide"&gt;
                        &lt;img src="assets/img/banner2.jpg" alt="음식"&gt;
                    &lt;/div&gt;
                    &lt;div class="swiper-slide"&gt;
                        &lt;img src="assets/img/banner3.jpg" alt="음식"&gt;
                    &lt;/div&gt;
                    &lt;div class="swiper-slide"&gt;
                        &lt;img src="assets/img/banner4.jpg" alt="음식"&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="swiper-pagination"&gt;&lt;/div&gt;
                &lt;div class="swiper-button-prev"&gt;&lt;/div&gt;
                &lt;div class="swiper-button-next"&gt;&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="btn-quick"&gt;&lt;/div&gt;

            &lt;div class="main_visual on"&gt;
                &lt;div class="vamtitle vamt-align"&gt;
                    &lt;div class="tit1 tit"&gt;where the&lt;/div&gt;
                    &lt;div class="tit2 tit"&gt;tasty story begins&lt;/div&gt;
                    &lt;div class="tit3 tit"&gt;맛있는 이야기가 시작되는 곳&lt;/div&gt;
                &lt;/div&gt;
                &lt;a href="#contentwrap" class="marrow move"&gt;
                    &lt;div class="con"&gt;
                        &lt;img src="assets/icons/main_v_arrow.png" alt="마우스"&gt;
                    &lt;/div&gt;
                    &lt;div class="con1"&gt;
                        &lt;img src="assets/icons/main_v_dot.png" alt="마우스"&gt;
                    &lt;/div&gt;
                &lt;/a&gt;
            &lt;/div&gt;
        &lt;/section&gt;
        &lt;!-- //banner --&gt;


        &lt;section id="contentwrap"&gt;
            &lt;div class="content-header"&gt;
                &lt;div class="content-title"&gt;
                    &lt;div class="en1"&gt;Create a person's story&lt;/div&gt;
                    &lt;div class="en2"&gt; S&S는 사람과 공간이 함께 어울릴 수 있도록 더 풍요롭고 더 맛있는 기회와 가치를 제공합니다.&lt;/div&gt;
                    &lt;div class="tabmenu"&gt;
                        &lt;a href="#" class="t1 active"&gt;&lt;/a&gt;
                        &lt;a href="#" class="t2"&gt;&lt;/a&gt;
                        &lt;a href="#" class="t3"&gt;&lt;/a&gt;
                        &lt;a href="#" class="t4"&gt;&lt;/a&gt;
                    &lt;/div&gt;
                    &lt;div class="story time5"&gt;
                        &lt;div class="caroufredsel_wrapper"&gt;
                            &lt;div class="sarea"&gt;
                                &lt;div class="items" alt="토끼정" style="width: 1920px;"&gt;
                                    &lt;div class="s1"&gt;
                                        &lt;div class="zoomimg"&gt;
                                            &lt;div class="align"&gt;
                                                &lt;div class="ent1"&gt;brand&lt;/div&gt;
                                                &lt;div class="ent2"&gt;토끼정 당신과 나의 마음이 함께 머무르는 곳&lt;/div&gt;
                                            &lt;/div&gt;                                     
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div class="s2"&gt;
                                        &lt;div class="zoomimg"&gt;
                                            &lt;div class="align"&gt;
                                                &lt;div class="ent3"&gt;MENU&lt;/div&gt;
                                                &lt;div class="ent4"&gt;일식과 한식의조화로 한국인의 입맛을 재해석 하다&lt;/div&gt;
                                            &lt;/div&gt;   
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div class="s3"&gt;
                                        &lt;div class="zoomimg"&gt;
                                            &lt;div class="align"&gt;
                                                &lt;div class="ent5"&gt;CONCEPT&lt;/div&gt;
                                                &lt;div class="ent6"&gt;아름다운 분위기에 맛을 더하다&lt;/div&gt;
                                            &lt;/div&gt;   
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/section&gt;
        &lt;!-- //contentwrap --&gt;

        &lt;section id="contwrap2"&gt;
            &lt;div class="title1"&gt;
                &lt;div class="title2"&gt;
                    &lt;div class="title3"&gt;
                        &lt;div class="tit"&gt;
                            &lt;div class="titimg"&gt;&lt;/div&gt;
                        &lt;/div&gt;
                        &lt;div class="tit4"&gt;
                            &lt;h2&gt;S&S STORY&lt;/h2&gt;
                            &lt;p class="span"&gt;OUR TIME&lt;br&gt;IN THE SAME TIME&lt;/p&gt;
                            &lt;p class="span1"&gt;우리는 그때 그곳에서처럼 당신을 기다립니다.&lt;br&gt;맛있는 음식,다정하게 내이름을 부르는 사람,마주보며 웃는 당신이 있는 곳&lt;br&gt;이곳은S&S입니다.&lt;/p&gt;
                            &lt;a href="#"&gt;&lt;img src="assets/img/view_more.jpg" alt="버튼"&gt;&lt;/a&gt;
                        &lt;/div&gt;
                        &lt;div class="tit5"&gt;
                            &lt;img src="assets/icons/main_ourbg_icn.png" alt="꽃"&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/section&gt;
        &lt;!-- //contwrap2 --&gt;


        &lt;section id="contwrap3"&gt;
            &lt;div class="title4"&gt;
                &lt;div class="title5"&gt;
                    &lt;div class="tltle6"&gt;
                        &lt;div class="tit_1"&gt;
                            &lt;div class="tit_img"&gt;&lt;/div&gt;
                        &lt;/div&gt;
                        &lt;div class="tit6"&gt;
                            &lt;h2&gt;PEOPLE&lt;/h2&gt;
                            &lt;p class="span2"&gt;PEOPLE &&lt;br&gt;S&S&lt;/p&gt;
                            &lt;p class="span3"&gt;경험과 열정, 문화와 음식,생각의 반전까지S&S는&lt;br&gt;맛있는 한 그릇,행복한 시간을 만들기 위해 열정을 다합니다.&lt;br&gt;경험과 문화 그 사이에 열정을 다하는 사람이 있습니다.&lt;/p&gt;
                            &lt;a href="#"&gt;&lt;img src="assets/img/view_more.jpg" alt="버튼"&gt;&lt;/a&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/section&gt;
         &lt;!-- //contwrap3 --&gt;

         &lt;section id="joy"&gt;
             &lt;div class="joy1"&gt;
                 &lt;div class="joybody"&gt;
                    &lt;div class="joytitle"&gt;
                        &lt;h2&gt;we&lt;br&gt;share&lt;br&gt;joy&lt;/h2&gt;
                    &lt;/div&gt;
                        &lt;div class="dddd"&gt;
                            &lt;div class="ddd joytitle1"&gt;&lt;/div&gt;
                        &lt;/div&gt;
                        &lt;div class="dddd"&gt;
                            &lt;div class="ddd joytitle2"&gt;&lt;/div&gt;
                        &lt;/div&gt;
                        &lt;div class="dddd"&gt;
                            &lt;div class="ddd joytitle3"&gt;&lt;/div&gt;
                        &lt;/div&gt;
                        &lt;div class="dddd"&gt;
                            &lt;div class="ddd joytitle4"&gt;&lt;/div&gt;
                        &lt;/div&gt;
                        &lt;div class="dddd"&gt;
                            &lt;div class="ddd joytitle5"&gt;&lt;/div&gt;
                        &lt;/div&gt;
                        &lt;div class="dddd"&gt;
                            &lt;div class="ddd joytitle6"&gt;&lt;/div&gt;
                        &lt;/div&gt;
                        &lt;div class="dddd"&gt;
                            &lt;div class="ddd joytitle7"&gt;&lt;/div&gt;
                        &lt;/div&gt;
                        &lt;div class="dddd"&gt;
                            &lt;div class="ddd joytitle8"&gt;&lt;/div&gt;
                        &lt;/div&gt;
                        &lt;div class="dddd"&gt;
                            &lt;div class="ddd joytitle9"&gt;&lt;/div&gt;
                        &lt;/div&gt;  
                &lt;/div&gt;
             &lt;/div&gt;
         &lt;/section&gt;
         &lt;!-- //joy --&gt;
        &lt;/div&gt;
        &lt;!-- //wrap --&gt;

         &lt;footer id="footer"&gt;
             &lt;div class="center1"&gt;
                 &lt;ul class="footerhed"&gt;
                     &lt;li&gt;&lt;a href="#"&gt;&lt;img src="assets/icons/footer1.png" alt="연결고리"&gt; 브랜드 제휴 문의&lt;/a&gt;&lt;/li&gt;
                     &lt;li&gt;&lt;a href="#"&gt;&lt;img src="assets/icons/footer2.png" alt="연결고리"&gt; 가맹문의&lt;/a&gt;&lt;/li&gt;
                     &lt;li&gt;&lt;a href="#"&gt;&lt;img src="assets/icons/footer3.png" alt="연결고리"&gt; 고객문의&lt;/a&gt;&lt;/li&gt;
                 &lt;/ul&gt;
             &lt;/div&gt;
             &lt;div class="center2"&gt;
                 &lt;ul class="footerbot"&gt;
                     &lt;li class="strong"&gt;이용약관 &lt;span&gt;&lt;/span&gt; 개인정보취급방침 &lt;span&gt;&lt;/span&gt; 식구채용&lt;/li&gt;
                     &lt;li class="mid"&gt;(주)에스앤에스컴퍼니대구광역시수성구두산동280-3 2층 &lt;span&gt;&lt;/span&gt; 대표전화:070-4610-2580 &lt;span&gt;&lt;/span&gt; 대표자:이성민 &lt;span&gt;&lt;/span&gt; 고객정보책임 담당자: 김지호 &lt;span&gt;&lt;/span&gt; 사업자등록번호:502-86-10105&lt;/li&gt;
                     &lt;li class="footerbottom"&gt;Copyright (c) &lt;span&gt;&lt;/span&gt; 2013 (주) 에스앤에스컴퍼니 All Rights reserved.&lt;/li&gt;
                 &lt;/ul&gt;
             &lt;/div&gt;
         &lt;/footer&gt;
         &lt;!-- //footer --&gt;
     &lt;!-- script --&gt;
     &lt;script src="assets/js/jquery-1.11.3.min.js"&gt;&lt;/script&gt;
    &lt;script src="assets/js/jquery.min.js"&gt;&lt;/script&gt;
    &lt;script src="assets/js/swiper.min.js"&gt;&lt;/script&gt;
    &lt;script src="assets/js/custom.js"&gt;&lt;/script&gt;
    &lt;script src="assets/js/jquery-ui.min.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;`)
//헤더 팝업창 html
htmlText4.push(`&lt;!-- 헤더 팝업창 알림 --&gt;
&lt;div id="submenuwrap"&gt;
    &lt;ul class="submenu"&gt;
         &lt;li class="title"&gt;
             &lt;a href="#"&gt;&lt;span&gt;about us&lt;/span&gt;&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;about us&lt;/a&gt;
         &lt;/li&gt;
         &lt;li class="title"&gt;
             &lt;a href="#"&gt;&lt;span&gt;work&lt;/span&gt;&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;work&lt;/a&gt;
         &lt;/li&gt;
         &lt;li class="title"&gt;
             &lt;a href="#"&gt;&lt;span&gt;S&S story&lt;/span&gt;&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;s&s story&lt;/a&gt;
         &lt;/li&gt;
         &lt;li class="title"&gt;
             &lt;a href="#"&gt;&lt;span&gt;brand&lt;/span&gt;&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;all brand&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;서가앤쿡&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;소싯적&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;토끼정&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;숨쉬는 순두부&lt;/a&gt;
         &lt;/li&gt;
         &lt;li class="title"&gt;
             &lt;a href="#"&gt;&lt;span&gt;people&lt;/span&gt;&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;people&lt;/a&gt;
         &lt;/li&gt;
         &lt;li class="title"&gt;
             &lt;a href="#"&gt;&lt;span&gt;community&lt;/span&gt;&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;news&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;s&s timeline&lt;/a&gt;
             &lt;a href="#" class="sub"&gt;event&lt;/a&gt;
         &lt;/li&gt;
    &lt;/ul&gt;
    &lt;a href="#" class="close"&gt;
        &lt;svg viewBox="0 0 24 24"&gt;
       &lt;path d="M14.1,12L22,4.1c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0L12,9.9L4.1,2C3.5,1.4,2.5,1.4,2,2C1.4,2.5,1.4,3.5,2,
       4.1L9.9,12L2,19.9c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l7.9-7.9l7.9,7.9c0.3,0.3,0.7,0.4,1.1,0.4
s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L14.1,12z"/&gt;
        &lt;/svg&gt;
     &lt;/a&gt;
 &lt;/div&gt;`)
// 닷메뉴 html
htmlText4.push(`&lt;!-- 사이드 닷 메뉴 만들기 --&gt;
&lt;div id="slidemenu"&gt;
   &lt;div class="slidemenu sidmenu"&gt;
       &lt;a href="#banner" class="active1"&gt;&lt;/a&gt;
       &lt;a href="#contentwrap"&gt;&lt;/a&gt;
       &lt;a href="#contwrap2"&gt;&lt;/a&gt;
       &lt;a href="#contwrap3"&gt;&lt;/a&gt;
       &lt;a href="#joy"&gt;&lt;/a&gt;
   &lt;/div&gt;
&lt;/div&gt;
`)
// 스케일 html
htmlText4.push(`&lt;!-- 스케일 들어간 부분 --&gt;
&lt;section id="joy"&gt;
&lt;div class="joy1"&gt;
    &lt;div class="joybody"&gt;
       &lt;div class="joytitle"&gt;
           &lt;h2&gt;we&lt;br&gt;share&lt;br&gt;joy&lt;/h2&gt;
       &lt;/div&gt;
           &lt;div class="dddd"&gt;
               &lt;div class="ddd joytitle1"&gt;&lt;/div&gt;
           &lt;/div&gt;
           &lt;div class="dddd"&gt;
               &lt;div class="ddd joytitle2"&gt;&lt;/div&gt;
           &lt;/div&gt;
           &lt;div class="dddd"&gt;
               &lt;div class="ddd joytitle3"&gt;&lt;/div&gt;
           &lt;/div&gt;
           &lt;div class="dddd"&gt;
               &lt;div class="ddd joytitle4"&gt;&lt;/div&gt;
           &lt;/div&gt;
           &lt;div class="dddd"&gt;
               &lt;div class="ddd joytitle5"&gt;&lt;/div&gt;
           &lt;/div&gt;
           &lt;div class="dddd"&gt;
               &lt;div class="ddd joytitle6"&gt;&lt;/div&gt;
           &lt;/div&gt;
           &lt;div class="dddd"&gt;
               &lt;div class="ddd joytitle7"&gt;&lt;/div&gt;
           &lt;/div&gt;
           &lt;div class="dddd"&gt;
               &lt;div class="ddd joytitle8"&gt;&lt;/div&gt;
           &lt;/div&gt;
           &lt;div class="dddd"&gt;
               &lt;div class="ddd joytitle9"&gt;&lt;/div&gt;
           &lt;/div&gt;  
   &lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
&lt;!-- //joy --&gt;`)



let cssText4 = [];
// 원스크롤 css
cssText4.push(`@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;669;700;800;900&display=swap');
body {
    font-family: 'Maven Pro', sans-serif;
}
/* 헤더 팝업 창 */
#slidemenu {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 20px;
    width: 32px;
    height: 180px;
    margin: auto;
    font-size: 1.2em;
    z-index: 10;
    text-align: center;
}
#slidemenu .sidmenu {
    width: 32px;
    height: auto;
    padding: 10px 0;
    background-color: rgba(51,51,51,0.5);
    border-radius: 20px;
}
.slidemenu {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
#slidemenu a.active1 {
    width: 10px;
    height: 10px;
    background: url(../icons/page_on.png) center center no-repeat;
}
#slidemenu a {
    display: block;
    margin: auto;
    position: relative;
    width: 10px;
    height: 10px;
    margin-top: 15px;
    margin-bottom: 20px;
    background: url(../icons/page_off.png) center center no-repeat;
}



/* submenu */
#submenuwrap {
    width: 100%; 
    height: 100vh;
    border-top: 1px solid #333333;
    position: absolute;
    top: -150vh;
    left: 0;
    z-index: 300;
}
.submenu {
    padding-top: 150px;
    width: 100%; height: 100vh;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.9);
    align-items: flex-start;
    z-index: 300;
}

.submenu .title {
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-transform: uppercase;
    padding-bottom: 20px;
}
.submenu .title a {
    color: #fff;
    font-size: 38px;
    font-weight: 700;
    line-height: 1.7;
    padding: 20px;
}
.submenu .title span:hover {
    border-bottom: 2px solid #fff;
}
.submenu .title .sub{
    color: #999999;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.7;
    padding: 0;
    text-transform: uppercase;
}
.submenu .title span{
    color:#fff;
}
.submenu .content {

}
.submenu .content ul{
    font-size: 18px;
    color: #999;
}
#submenuwrap .close {
    z-index: 300;
    position: absolute; top: 25px; right: 35px;
}
#submenuwrap .close svg {
    width: 40px; height: 40px; fill: #fff;
    vertical-align: top;
}





/* 사이드 메뉴 만들기 */


/* 헤더 */
.wrap {
}

.header {
    width: 100%; height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    min-width: 1100px;
}
.header .area {
    width: 100%; 
    height: 100%;
    position: relative;
    background-color: rgba(0,0,0,0.7);
    animation: fadeInDown 3s ;
}
@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.wrap .area img {
    position: absolute;
    left: 30px;
    top: 20px;
    width: 79px; height: 40px;
}

/* 탑 메뉴 */
.header .area .menus {
    width: 810px; height: 100px;
    margin: auto;
    padding-top: 31px;
    position: relative;
}
.menus a .topmeau {
    color: #fff;
}
.menus .on {
    color: #fff;
    /* text-decoration: underline; */
}
.menus .topmeau {

/* position: absolute; top: 50%; left: 50%; */
}
.header .area .menus a {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    font-family: 'Maven Pro';
    text-transform: uppercase;
    margin-right: 60px;
}
.header .area .menus a:last-child {
    margin-right: 0;
}



/* sidemenu */
.sidemenu {
    
}
.side {
}
.sidemenu a {
  
}
.area .side img{
    position: absolute; left: 96%; top: 26px;
    width: 40px; height: 30px;
    
}

/* banner */
#banner {
    position: relative;
    width: 100%;
    height: 100vh;
    
}
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-wrapper {
    width: 100%; height: 100vh;
    transition: transform 1s cubic-bezier(1, 0.265, 0, 1.225) 0s;
}
.swiper-slide {}
.swiper-slide img{
    width: 100%; height: 100%;
}


/* 글씨 부분 */
.main_visual {
    transition-timing-function: ease;
}
.main_visual .on {
    width: 100%;
    height: 100%;
}   
.main_visual .vamtitle {
    text-transform: uppercase;
    text-align: center;
    min-width: 1200px;
}
.vamt-align {
    position: absolute; top: -100%; left: 17%;
    top: 35%;
    z-index: 1;
}
.vamtitle .tit1{
    color: #fff;
    font-size: 80px;
    height: 100px;
    font-weight: 400;
    font-family: 'Maven Pro';
}
.vamtitle .tit2{
    display: inline-block;
    color: #fff;
    font-size: 80px;
    font-weight: 700;
    margin-top: 20px;
    font-family: 'Maven Pro';
}
.vamtitle .tit3{
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    margin-top: 30px;
}
.tit {
    animation: fadeInDown 3s ;
    /* animation-name: fadeInDown; */
}
@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 마우스 이미지 */
.marrow {
    z-index: 1;
    position: absolute;
    left: 50%; bottom: 12%;
    animation: mainItem 2s ease-in-out infinite alternate;
}
.marrow .con {
    position: relative;
    height: 130px;
}
.con img {
    vertical-align: middle;
    width: 22px; height: 130px;
}
.con1 img {
    position: absolute; left: 46%; top: 48%;
    width: 2px; height: 4px;
}
@keyframes mainItem {
    0% {
        transform: translate(0,-10px);
    }
    90% {
        transform: translate(0,125%);
    }
    100% {
        transform: translate(0, 200%);
        opacity: 0;
    }
}

/* content-wrap */
#contentwrap {
    max-width: 100%;
    overflow: hidden;
    height: 100vh;
    background: #fff;
}
.content-header{}
.content-title{
    text-transform: uppercase;
    color: #222;
    text-align: center;

}
.content-title .en1{
    font-family: 'Maven Pro', sans-serif;
    margin-top: 100px;
    font-size: 50px;
    font-weight: 400px;
}
.content-title .en2{
    font-family: 'ygpstit', sans-serif;
    font-size: 18px;
    color: #888;
    margin-top: 10px;
    margin-bottom: 48px;
    font-weight: 300;
}

/* content tabmenu */
.tabmenu {
    width: 100%; height: 90px;
    border-top: 1px solid #e6e6e6;
}
.tabmenu a {
    width: 300px;
    display: inline-block;
    height: 81px;
    text-align: right;
}
.tabmenu .active {
    border-top: 2px solid #000;
}
.tabmenu a::after {
    content: '|';
    color: #dfdfdf;
    font-size: 20px;
    line-height: 81px;
    font-weight: 300px;
}
.tabmenu a:last-child::after {
    content: '|';
    color: #fff;
    font-size: 20px;
    line-height: 81px;
    font-weight: 300px;
}
.tabmenu a:nth-child(1) {
    background-image: url(../icons/m_tab01_on.png);
    background-repeat: no-repeat;
    background-position: center center;
}
.tabmenu a:nth-child(2) {
    background-image: url(../icons/m_tab02_on.png);
    background-repeat: no-repeat;
    background-position: center center;
}
.tabmenu a:nth-child(3) {
    background-image: url(../icons/m_tab03_on.png);
    background-repeat: no-repeat;
    background-position: center center;
}
.tabmenu a:nth-child(4) {
    background-image: url(../icons/m_tab04_on.png);
    background-repeat: no-repeat;
    background-position: center center;
}
a:link, a:visited {
    color: #000;
}




/* 이미지 부분 */
.story {
    min-width: 1200px;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    margin: auto;
    position: relative;

}

.caroufredsel_wrapper {
    display: block;
    text-align: start;
    float: none;
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: auto;
    width: 1920px;
    height: 600px;
    margin: 0 auto;
    overflow: hidden;
}
.sarea {
    text-align: left;
    float: none;
    position: absolute;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    margin: 0;
    width: 17280px;
    height: 600px;
    z-index: auto;
}

.zoomimg {
    position: relative;
    transform: scale(1);
}
.s1 {
    overflow: hidden;
}
.s2 {
    overflow: hidden;
}
.s3 {
    overflow: hidden;
}
.items .zoomimg:hover {
    transform: scale(1.1);

    transition: all 0.4s ease-in-out;
}
.zoomimg:hover .align {
    width: 100%;
    height: 3000px;
    background-color: rgba(0,0,0,0.7);
    transition: all 0.6s ease-in-out;
}
.story .sarea .items .s1 {  
    position: relative;
    float: left;
    width: 50%;
    height: 600px;
    overflow: hidden;
    z-index: 11;
}
.s1 .zoomimg {
    background-image: url(../icons/main_story_v0301.png);
    background-size: cover;
    background-position: center center;
    height: 100%;
}
.story .sarea .items .s2 {
    position: relative;
    float: left;
    width: 50%;
    height: 300px;
    overflow: hidden;
}
.s2 .zoomimg {
    background-image: url(../icons/main_story_v0302.png);
    background-size: cover;
    background-position: center center;
    height: 100%;
}
.story .sarea .items .s3 {
    position: relative;
    float: left;
    width: 50%;
    height: 300px;
    overflow: hidden;
}
.s3 .zoomimg {
    background-image: url(../icons/main_story_v0303.png);
    background-size: cover;
    background-position: center center;
    height: 100%;
}


#contentwrap .s4 {
    height: 1vh;
}
.align {
    height: 35px;
}
.ent1 {
    position: absolute; left: 45%; top: 45%;
    z-index: 10;
    width: 100%;
    font-size: 30px;
    font-family: 'Maven Pro', sans-serif;
    font-weight: 400;
    color: #fff;
}
.ent2 {
    position: absolute; left: 32%; top: 51%;
    font-family: 'ygpstit', sans-serif;
    opacity: .8;
    font-size: 18px;
    margin-top: 13px;
    color: #fff;
}
.align .ent3 {
    position: absolute; left: 44%; top: 37%;
    z-index: 10;
    width: 100%;
    font-size: 30px;
    font-family: 'Maven Pro', sans-serif;
    font-weight: 400;
    color: #fff;
}
.align .ent4 {
    position: absolute; left: 27%; top: 51%;
    font-family: 'ygpstit', sans-serif;
    opacity: .8;
    font-size: 18px;
    margin-top: 13px;
    color: #fff;
}
.align .ent5 {
    position: absolute; left: 42%; top: 37%;
    z-index: 10;
    width: 100%;
    font-size: 30px;
    font-family: 'Maven Pro', sans-serif;
    font-weight: 400;
    color: #fff;
}
.align .ent6 {
    position: absolute; left: 36%; top: 51%;
    font-family: 'ygpstit', sans-serif;
    opacity: .8;
    font-size: 18px;
    margin-top: 13px;
    color: #fff;
}

/* contwrap2 */
#contwrap2 {
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 100vh;
}
.title1 {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
}
.title2 {
    width: 100%;
    min-width: 1200px;
    height: 100%;
    background-color: #f5f2ed;
    position: relative;
    padding-top: 1%;
}

.title3 {
    width: 100%;
    height: 570px;
    min-width: 1200px;
    max-width: 1680px;
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
}
.tit {
    padding-left: 100px;
    overflow: hidden;
}
.titimg {
    background-image: url(../icons/main_ourtime.png);
    width: 740px;
    height: 550px;
}
.tit4 {
    z-index: 1;
    padding-left: 100px;
    position: absolute; top: 16%; left: 50%;
    float: right;
}
.tit4 h2 {
    font-size: 25px;
    color: #222222;
    font-weight: 400;
    font-family: 'Maven Pro', sans-serif;

}
.tit4 .span {
    font-size: 50px;
    margin-top: 20px;
    color: #333333;
    line-height: 1.2;
    font-weight: 500;
    font-family: 'Maven Pro', sans-serif;

}
.tit4 .span1 {
    font-size: 18px;
    color: #888888;
    margin-top: 30px;
    line-height: 1.7;
    font-weight: 300;
}
.tit4 img {
    width: 170px;
    height: 50px;
    font-size: 13px;
    background-color: #333333;
    color: #fff;
    margin-top: 35px;
}
.tit5 img {
    position: absolute; top: 20%; left: 64%;
    width: 700px;
    height: 600px;
}


/* contwrap3 */
#contwrap3 {
    padding-top: 80px;
    display: table;
    table-layout: fixed;
    width: 100%;
    height: 100vh;
  }
  .title4 {
      display: table-cell;
      vertical-align: middle;
      width: 100%;
  }
  .title5 {
      width: 100%;
      min-width: 1200px;
      height: 100%;
      background-image: url(../icons/main_pebg.png);
      position: relative;
  }
  
  .title6 {
      width: 100%;
      height: 570px;
      min-width: 1200px;
      max-width: 1680px;
      position: absolute; top: 50%; left: 50%;
      transform: translate(-50%, -50%);
  }
  .tit_1 {
      display: flex;
      padding-left: 100px;
      overflow: hidden;
  }
  .tit_img {
      position: absolute; top: 28%; left: 50%;
      background-image: url(../icons/main_people.png);
      width: 740px;
      height: 540px;
  }
  .tit6 {
      z-index: 1;
      padding-left: 100px;
      position: absolute; top:31%; left: 15%;  
      float: left;
  }
  .tit6 h2 {
      font-size: 25px;
      color: #222222;
      font-weight: 400;
      font-family: 'Maven Pro', sans-serif;
  
  }
  .tit6 .span2 {
      font-size: 50px;
      margin-top: 20px;
      color: #000000;
      line-height: 1.2;
      font-weight: 500;
      font-family: 'Maven Pro', sans-serif;
  
  }
  .tit6 .span3 {
      font-size: 18px;
      color: #888888;
      margin-top: 30px;
      line-height: 1.7;
      font-weight: 300;
  }
  .tit6 img {
      width: 170px;
      height: 50px;
      font-size: 13px;
      background-color: #333333;
      color: #fff;
      margin-top: 35px;
  }

    /* joy*/
    #joy {
        width: 100%;
        height: 100vh;
        background-image: url(../icons/bg_joy.png);
        background-repeat: no-repeat;
        background-position: 270px 230px;
        background-color: rgba(230,231,226);
    }
    .joy1 {
        /* width: 100%;
        height: 100%; */
    }
    .joybody {
        display: grid;
        grid-template-columns: repeat(5,328px);
        grid-template-rows: repeat(2,328px);
        justify-content: center;
        width: 100%;
        height: 800px;
        padding-top: 110px;
        position: relative;
        overflow: hidden;
    } 
    .joytitle {
    }
    .joytitle h2 {
        line-height: normal;
        width: 328px; height: 210px;
        font-size: 60px;
        color: #333333;
        font-family: 'Maven Pro', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
    }
    .joytitle1 {
        width: 328px; height: 328px;
        background: #fff;
        background-image: url(../icons/thumb-31294850.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .joytitle2 {
        width: 328px; height: 328px;;
        background: #fff;
        background-image: url(../icons/joyimg2.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .joytitle3 {
        width: 328px; height: 328px;
        background: #fff;
        background-image: url(../icons/joyimg3.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .joytitle4 {
        width: 328px; height: 328px;
        background: #fff;
        background-image: url(../icons/joyimg4.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .joytitle5 {
        width: 328px; height: 328px;
        background: #fff;
        background-image: url(../icons/joyimg5.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .joytitle6 {
        width: 328px; height: 328px;
        background: #fff;
        background-image: url(../img/joyjpg1.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .joytitle7 {
        width: 328px; height: 328px;
        background: #fff;
        background-image: url(../icons/joyimg6.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .joytitle8 {
        width: 328px; height: 328px;
        background: #fff;
        background-image: url(../icons/joyimg7.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .joytitle9 {
        width: 328px; height: 328px;
        background-image: url(../icons/joyimg8.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .dddd{
        overflow: hidden;
    }
    .ddd {
        position: relative;
        transform: scale(1.0);
    }
    .ddd::before { 
       content: "";
       width: 328px;
       height: 328px;
       position: absolute;
       top: 0px;
       left: 0px;
       background-color: rgba(0,0,0,0.7);
       opacity: 0;
    }
    .ddd:hover::before {
        cursor: pointer;
        opacity: 1;
        transition: all 0.6s ease-in-out;
    }
    .ddd:hover {
        transform: scale(1.2);
        transition: all 0.3s ease-in-out;
    }
    /* footer */
    #footer {
        font-family: 'Nanum Barun Gothic';
        width: 100%; height: 250px;
    }
    .center1 {
        width: 100%; height: 80px;
        overflow: hidden;      
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ededed;
    }
    .footerhed {
        width: 600px;
        margin: 0 auto;
    }
    .footerhed li {
        float: left;
    }
    .footerhed li a {
        padding-left: 50px;
        font-size: 16px;
        color: #666666;
    }
    .footerhed li img{
        width: 25px; height: 25px;
    }

    .center2 {
        position: relative;
        width: 100%; height: 100px;
        overflow: hidden;
        display: flex;
        align-items: center;
        margin-top: 20px;
    }
    .footerbot {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        text-align: center;
    }
    .footerbot .strong {
        font-size: 14px;
        color: #666666;
    }
    .strong span::after {
        content: '|';
        padding-right: 8px;
        padding-left: 8px;
        color: #d9d9d9;
        font-weight: 300;
        font-size: 12px;
    }
    .footerbot .mid {
        margin-top: 20px;
        color: #999999;
        font-size: 13px;
        font-weight: 300;
        letter-spacing: -1px;
    }
    .mid span::after {
        content: '|';
        padding-right: 6px;
        padding-left: 6px;
        color: #d9d9d9;
        font-weight: 300;
        font-size: 12px;
    }
    .footerbot .footerbottom {
        color: #cccccc;
        font-size: 13px;
        margin-top: 15px;
        font-weight: 300;
    }
    .footerbottom span::after {
        content: '|';
        padding-right: 4px;
        padding-left: 2px;
        color: #d9d9d9;
        font-weight: 300;
        font-size: 12px;
    }`)
//헤더 팝업창 css
cssText4.push(`/* 헤더 팝업창 */
#submenuwrap {
    width: 100%; 
    height: 100vh;
    border-top: 1px solid #333333;
    position: absolute;
    top: -150vh;
    left: 0;
    z-index: 300;
}
.submenu {
    padding-top: 150px;
    width: 100%; height: 100vh;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.9);
    align-items: flex-start;
    z-index: 300;
}

.submenu .title {
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-transform: uppercase;
    padding-bottom: 20px;
}
.submenu .title a {
    color: #fff;
    font-size: 38px;
    font-weight: 700;
    line-height: 1.7;
    padding: 20px;
}
.submenu .title span:hover {
    border-bottom: 2px solid #fff;
}
.submenu .title .sub{
    color: #999999;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.7;
    padding: 0;
    text-transform: uppercase;
}
.submenu .title span{
    color:#fff;
}
.submenu .content {

}
.submenu .content ul{
    font-size: 18px;
    color: #999;
}
#submenuwrap .close {
    z-index: 300;
    position: absolute; top: 25px; right: 35px;
}
#submenuwrap .close svg {
    width: 40px; height: 40px; fill: #fff;
    vertical-align: top;
}`)
//닷 메뉴 css
cssText4.push(`/* 사이드 닷 메뉴 */
#slidemenu {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 20px;
    width: 32px;
    height: 180px;
    margin: auto;
    font-size: 1.2em;
    z-index: 10;
    text-align: center;
}
#slidemenu .sidmenu {
    width: 32px;
    height: auto;
    padding: 10px 0;
    background-color: rgba(51,51,51,0.5);
    border-radius: 20px;
}
.slidemenu {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
#slidemenu a.active1 {
    width: 10px;
    height: 10px;
    background: url(../icons/page_on.png) center center no-repeat;
}
#slidemenu a {
    display: block;
    margin: auto;
    position: relative;
    width: 10px;
    height: 10px;
    margin-top: 15px;
    margin-bottom: 20px;
    background: url(../icons/page_off.png) center center no-repeat;
}`)
//스케일 css
cssText4.push(`/* 스케일 들어간 부분*/
#joy {
    width: 100%;
    height: 100vh;
    background-image: url(../icons/bg_joy.png);
    background-repeat: no-repeat;
    background-position: 270px 230px;
    background-color: rgba(230,231,226);
}
.joy1 {
    /* width: 100%;
    height: 100%; */
}
.joybody {
    display: grid;
    grid-template-columns: repeat(5,328px);
    grid-template-rows: repeat(2,328px);
    justify-content: center;
    width: 100%;
    height: 800px;
    padding-top: 110px;
    position: relative;
    overflow: hidden;
} 
.joytitle {
}
.joytitle h2 {
    line-height: normal;
    width: 328px; height: 210px;
    font-size: 60px;
    color: #333333;
    font-family: 'Maven Pro', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
}
.joytitle1 {
    width: 328px; height: 328px;
    background: #fff;
    background-image: url(../icons/thumb-31294850.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.joytitle2 {
    width: 328px; height: 328px;;
    background: #fff;
    background-image: url(../icons/joyimg2.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.joytitle3 {
    width: 328px; height: 328px;
    background: #fff;
    background-image: url(../icons/joyimg3.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.joytitle4 {
    width: 328px; height: 328px;
    background: #fff;
    background-image: url(../icons/joyimg4.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.joytitle5 {
    width: 328px; height: 328px;
    background: #fff;
    background-image: url(../icons/joyimg5.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.joytitle6 {
    width: 328px; height: 328px;
    background: #fff;
    background-image: url(../img/joyjpg1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
.joytitle7 {
    width: 328px; height: 328px;
    background: #fff;
    background-image: url(../icons/joyimg6.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.joytitle8 {
    width: 328px; height: 328px;
    background: #fff;
    background-image: url(../icons/joyimg7.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.joytitle9 {
    width: 328px; height: 328px;
    background-image: url(../icons/joyimg8.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.dddd{
    overflow: hidden;
}
.ddd {
    position: relative;
    transform: scale(1.0);
}
.ddd::before { 
   content: "";
   width: 328px;
   height: 328px;
   position: absolute;
   top: 0px;
   left: 0px;
   background-color: rgba(0,0,0,0.7);
   opacity: 0;
}
.ddd:hover::before {
    cursor: pointer;
    opacity: 1;
    transition: all 0.6s ease-in-out;
}
.ddd:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
}`)



let jsText4 = [];
// 원스크롤 js
jsText4.push(`/*원스크롤 js*/
(function($){
    $.aniPage=function(e,type){
        $("#section > div").height($(window).height());
        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
            
            $.subtr = $(window).scrollTop()-$(window).height();
            if($(window).scrollTop() > 0){
                if($(window).scrollTop() % $(window).height() > 0){
                    $.subtr = $(window).scrollTop()-($(window).scrollTop() % $(window).height());
                }
            }
            
            $("body, html").animate({scrollTop:$.subtr},700,function(){$.aniOk = 0;
            });
        }else{				
            
            $.addit = $(window).scrollTop()+$(window).height();
            if($(window).scrollTop() > 0){
                if($(window).scrollTop() % $(window).height() > 0){
                    $.addit = $(window).scrollTop()-($(window).scrollTop() % $(window).height())+$(window).height();
                }
            }
            
            $("body, html").animate({scrollTop:$.addit},700,function(){$.aniOk = 0;
                // $("body, html").animte({})
            });
        }
    };
})(jQuery);
$(function(){
    $("#section > div").height($(window).height());
    $.aniOk=0;
    $(window).scrollTop(0);
    $("#section > div").delay(30000)
});
$(document).on("mousewheel DOMMouseScroll",function(e){
    e.preventDefault();
    if($.aniOk == 0){
        $.aniPage(e,e.type);
        $.aniOk = 1;
    }
});
</script>`)
//헤더 팝업창 js
jsText4.push(`/*헤더 팝업창 js*/
$(".side img").click(function(){
    $("#submenuwrap").delay(300).animate({top : "0vh"},1000,"easeInOutCirc")
    $("#submenuwrap").css("z-index","3000")
})
$(".close").click(function(){
    $("#submenuwrap").delay(300).animate({top : "-300vh"},1000,"easeInOutCirc")
})`)
//닷 메뉴 js
jsText4.push(`/*닷 메뉴js*/
let dot = $("#slidemenu > div > a")
let cont = $(".wrap > section")

dot.click(function(e){
 e.preventDefault();
 let target = $(this)
 let index = target.index();
 let section = cont.eq(index);
 let ottset = section.offset().top;
 
 $("html, body").delay(200).animate({scrollTop : ottset},1000,"swing")
 });

 $(window).scroll(function(){
 let wScroll = $(this).scrollTop() + $(window).height()/2;
 // let wScrolle = 
 if(wScroll >= cont.eq(0).offset().top ){
     dot.eq(0).addClass("active1").siblings().removeClass("active1");
 }
 
 if(wScroll >= cont.eq(1).offset().top){
     dot.eq(1).addClass("active1").siblings().removeClass("active1");
 }
 
 if(wScroll >= cont.eq(2).offset().top){
     dot.eq(2).addClass("active1").siblings().removeClass("active1");
 }
 
 if(wScroll >= cont.eq(3).offset().top){
     dot.eq(3).addClass("active1").siblings().removeClass("active1");
 }
 
 if(wScroll >= cont.eq(4).offset().top){
     dot.eq(4).addClass("active1").siblings().removeClass("active1");
 }
 show()
});
`)
//스케일 js
jsText4.push(`script.js가 사용되지 않았습니다.`)















// 버튼 클릭시 코드 영역 변경해주기
let tabBtn1 = $(".hover_wrap");
let tabBtn2 = $(".hover_button");
let tabBtn3 = $(".button1");
let tabBtn4 = $(".button2");
let tabBtn5 = $(".arrow a");

// 제목 바뀌게 해주기
let tabInfo1 = $(".site-info > .site01");
let tabInfo2 = $(".site-info > .site02");
let tabInfo3 = $(".site-info > .site03");
let tabInfo4 = $(".site-info > .site04");
let tabInfo5 = $(".desc_wrap > .desc-text");




// 버튼 클릭시 글씨 바꿔주는 부분
tabInfo1.css("display","none").css({opacity:'0'});
tabInfo1.eq(0).css("display","block").animate({opacity:'1'},1000);
tabInfo2.css("display","none").css({opacity:'0'});
tabInfo2.eq(0).css("display","block").animate({opacity:'1'},1000);
tabInfo3.css("display","none").css({opacity:'0'});
tabInfo3.eq(0).css("display","block").animate({opacity:'1'},1000);
tabInfo4.css("display","none").css({opacity:'0'});
tabInfo4.eq(0).css("display","block").animate({opacity:'1'},1000);
tabInfo5.css("display","none").css({opacity:'0'});
tabInfo5.eq(0).css("display","block").animate({opacity:'1'},1000);

// tabBtn1
tabBtn1.click(function(){
    let target = $(this);
    let index= target.index();
    tabBtn1.siblings().removeClass("active");
    target.addClass("active");
    tabInfo1.siblings().css("display","none").css({opacity:'0'});
    tabInfo1.eq(index).show().animate({opacity:'1'},1000);
})
// tabBtn2
tabBtn2.click(function(){
    let target = $(this);
    let index= target.index();
    tabBtn2.siblings().removeClass("active");
    target.addClass("active");
    tabInfo2.siblings().css("display","none").css({opacity:'0'});
    tabInfo2.eq(index).show().animate({opacity:'1'},1000);
})
// tabBtn3
tabBtn3.click(function(){
    let target = $(this);
    let index= target.index();
    tabBtn3.siblings().removeClass("active");
    target.addClass("active");
    tabInfo3.siblings().css("display","none").css({opacity:'0'});
    tabInfo3.eq(index).show().animate({opacity:'1'},1000);
})
tabBtn4.click(function(){
    let target = $(this);
    let index= target.index();
    tabBtn4.siblings().removeClass("active");
    target.addClass("active");
    tabInfo4.siblings().css("display","none").css({opacity:'0'});
    tabInfo4.eq(index).show().animate({opacity:'1'},1000);
})
tabBtn5.click(function(e){
    e.preventDefault();
    let target = $(this);
    let index= target.index();
    tabBtn5.siblings().removeClass("active");
    target.addClass("active");
    tabInfo5.siblings().css("display","none").css({opacity:'0'});
    tabInfo5.eq(index).show().animate({opacity:'1'},1000);
})

        // 코드 영역 스크립트
        $(".numberswrap").hide().eq(0).show();
        // code.html1
        $("code.html1").html(htmlText[0]);
        $("code.css1").html(cssText[0]);
        $("code.js1").html(jsText[0]);


        // circle and code tapMenu
        $(".hover01").click(function(e){
            e.preventDefault();
            // circle-Tap
            $(this).addClass("active").siblings().removeClass("active");
    
            // code-tap-content
            // code.html1
            $("code.html1").html(htmlText[$(this).index()]);
            $("code.css1").html(cssText[$(this).index()]);
            $("code.js1").html(jsText[$(this).index()]);
            backgroudcolor();
    });

    // numberswrap1
    $(".numberswrap.numberswrap1").hide().eq(0).show();
    // code.html1
    $("code.html2").html(htmlText2[0]);
    $("code.css2").html(cssText2[0]);
    $("code.js2").html(jsText2[0]);


     // circle and code tapMenu
     $(".hover02").click(function(e){
        e.preventDefault();
        // circle-Tap
        $(this).addClass("active").siblings().removeClass("active");

        // code-tap-content
        // code.html1
        $("code.html2").html(htmlText2[$(this).index()]);
        $("code.css2").html(cssText2[$(this).index()]);
        $("code.js2").html(jsText2[$(this).index()]);
        backgroudcolor();
});

    // numberswrap2
    $(".numberswrap.numberswrap2").hide().eq(0).show();
    // code.html1
    $("code.html3").html(htmlText3[0]);
    $("code.css3").html(cssText3[0]);
    $("code.js3").html(jsText3[0]);


     // circle and code tapMenu
     $(".hover03").click(function(e){
        e.preventDefault();
        // circle-Tap
        $(this).addClass("active").siblings().removeClass("active");

        // code-tap-content
        // code.html1
        $("code.html3").html(htmlText3[$(this).index()]);
        $("code.css3").html(cssText3[$(this).index()]);
        $("code.js3").html(jsText3[$(this).index()]);
        backgroudcolor();
});

    $(".numberswrap.numberswrap3").hide().eq(0).show();
    // code.html1
    $("code.html4").html(htmlText4[0]);
    $("code.css4").html(cssText4[0]);
    $("code.js4").html(jsText4[0]);


     // circle and code tapMenu
     $(".hover04").click(function(e){
        e.preventDefault();
        // circle-Tap
        $(this).addClass("active").siblings().removeClass("active");

        // code-tap-content
        // code.html1
        $("code.html4").html(htmlText4[$(this).index()]);
        $("code.css4").html(cssText4[$(this).index()]);
        $("code.js4").html(jsText4[$(this).index()]);
        backgroudcolor();
});


$(".hover_top").click(function(){
    $(".site_html").show()
})
$("#hover-no").click(function(){
    $(".site_html").hide()
})