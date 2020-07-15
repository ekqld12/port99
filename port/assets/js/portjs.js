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
htmlText2.push(`/* 미디어쿼리는 html을 지원하지 않습니다.*/`)
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


let jsText2 = [];
//미디어 쿼리 js
jsText2.push(``)

// 버튼 클릭시 코드 영역 변경해주기
let tabBtn1 = $(".hover_button");

// 제목 바뀌게 해주기
let tabInfo1 = $(".site-info > .site01");
let tabInfo2 = $(".site-info > .site02");
let tabInfo3 = $(".site-info > .site03");
let tabInfo4 = $(".site-info > .site04");


// 버튼 클릭시 글씨 바꿔주는 부분
tabInfo1.css("display","none").css({opacity:'0'});
tabInfo1.eq(0).css("display","block").animate({opacity:'1'},1000);
tabInfo2.css("display","none").css({opacity:'0'});
tabInfo2.eq(0).css("display","block").animate({opacity:'1'},1000);
tabInfo3.css("display","none").css({opacity:'0'});
tabInfo3.eq(0).css("display","block").animate({opacity:'1'},1000);
tabInfo4.css("display","none").css({opacity:'0'});
tabInfo4.eq(0).css("display","block").animate({opacity:'1'},1000);

tabBtn1.click(function(){
    let target = $(this);
    let index= target.index();
    tabBtn1.siblings().removeClass("active");
    target.addClass("active");
    tabInfo1.siblings().css("display","none").css({opacity:'0'});
    tabInfo1.eq(index).show().animate({opacity:'1'},1000);
    tabInfo2.siblings().css("display","none").css({opacity:'0'});
    tabInfo2.eq(index).show().animate({opacity:'1'},1000);
    tabInfo3.siblings().css("display","none").css({opacity:'0'});
    tabInfo3.eq(index).show().animate({opacity:'1'},1000);
    tabInfo4.siblings().css("display","none").css({opacity:'0'});
    tabInfo4.eq(index).show().animate({opacity:'1'},1000);


})

        // 코드 영역 스크립트
        $(".numberswrap").hide().eq(0).show();
        // code.html1
        $("code.html1").html(htmlText[0]);
        $("code.css1").html(cssText[0]);
        $("code.js1").html(jsText[0]);


        // circle and code tapMenu
        $(".hover").click(function(e){
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

    