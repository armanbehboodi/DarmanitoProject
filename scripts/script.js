function function0() {
    window.open("pharmacy.html", "_self")
}


function nav() {
    let navLi = document.getElementById('navResponsive');
    let navBtn = document.getElementById('btn0');
    let navBtnBox = document.getElementById('btnBox');
    let lasTli0 = document.getElementById('newLi0');
    let lasTli1 = document.getElementById('newLi1');
    let burger = document.getElementById('burger');
    if (navLi.style.display === "block"){
        navLi.style.display = "none";
        burger.style.backgroundImage = "url('styles/images/bars.svg')";
        burger.style.width = "25px";
        burger.style.height = "25px";
    }
    else {
        navLi.style.display = "block";
        navLi.style.backgroundColor = "white";
        navLi.style.zIndex = "1";
        navBtn.style.display = "block";
        navBtnBox.style.margin = "15px 15px 10px 10px";
        lasTli0.style.display = "block";
        lasTli1.style.display = "block";
        burger.style.backgroundImage = "url('styles/images/close.svg')";
        burger.style.width = "30px";
        burger.style.height = "30px";
    }
}

window.addEventListener("load",function(){
    let size = window.innerWidth;
    if (size <= 425){
        let txt0 = document.querySelector(".header__secondTxt");
        let txt1 = document.querySelector("#aboutBox00");
        let txt2 = document.querySelector(".about__secondTxt");
        let txt3 = document.querySelector(".property__leftTxt1");
        let txt4 = document.querySelector("#newTxt");
        let txt5 = document.querySelector(".blueBox__secondText")
        let txt6 = document.querySelector(".drugStore__text--active");
        let txt7 = document.querySelector(".drugStore__secondText--active");
        txt0.innerHTML = "سوپر اپلیکیشن حوزه درمان و سلامت";
        txt1.innerHTML = "درمانیتو چی هست؟";
        txt2.innerHTML = "درمانیتو یک سوپر اپلیکیشن هست که سعی داره با سرویس های متفاوتش روند درمان شمارو سریع تر کنه شما با درمانیتو میتونید نسخه خودتون رو برای تمام داروخانه های اطراف خودتون بفرستید"
        txt3.innerHTML = "شما با درمانیتو میتونید نسخه و داروی خودتون رو اول برای تمام داروخانه های اطراف خودتون بفرستید و اگر پیدا نشد به تمام داروخانه ها ارسال کنید و در کمترین زمان داروی شما پیدا می شود"
        txt4.innerHTML = "سرویس های درمانیتو";
        txt5.innerHTML = "شما میتونید شماره خودتون یا دوستتون رو وارد کنید تا لینک دانلود پیامک بشه";
        txt6.innerHTML = "من داروخانه یا مرکز درمانی هستم";
        txt7.innerHTML = "اگر شما داروخانه یا مرکز درمانی هستید و قصد دارید در روند درمان هموطن هامون و کسب و کار خودتان تغییری ایجاد کنید درمانیتو منتظر شماست"
    }
});

window.onload = function(){
    let containerBox = document.querySelector('.property__containerBox');
    if (window.innerWidth < 480){
        containerBox.classList.add('about__itemContainer');
    }
}

window.addEventListener("resize", function (){
    let containerBox = document.querySelector('.property__containerBox');
    if (window.innerWidth < 480){
        containerBox.classList.add('about__itemContainer');
    }else {
        containerBox.classList.remove('about__itemContainer');
    }
})