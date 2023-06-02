

// navbar items underline
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let Offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        let ratio1 = document.querySelector('.html__mark');

        if(top >= Offset && top < Offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // ratio1.classList.add('html__animate');
        }
    });
    // navbar box-shadow
    let navbar = document.querySelector('nav');
    navbar.classList.toggle('scroll-sticky', window.scrollY > 100);    //100 means after how much px scrollY this classlist (scroll-sticky) should add to mentioned section or div
    
    
    // arrow top button
    let arrowUp = document.querySelector('.arrow__top');
    arrowUp.classList.toggle('arrow__visible', window.scrollY > 700);
    

    // ratio animation
    let ratio1 = document.querySelector('.html__mark');
    ratio1.classList.toggle('html__animate', window.scrollY > 400);

    let ratio2 = document.querySelector('.css__mark');
    ratio2.classList.toggle('css__animate', window.scrollY > 400);

    let ratio3 = document.querySelector('.js__mark');
    ratio3.classList.toggle('js__animate', window.scrollY > 400);

    let ratio4 = document.querySelector('.react__mark');
    ratio4.classList.toggle('react__animate', window.scrollY > 410);

    let ratio5 = document.querySelector('.design__mark');
    ratio5.classList.toggle('design__animate', window.scrollY > 560);

    let ratio6 = document.querySelector('.dev__mark');
    ratio6.classList.toggle('dev__animate', window.scrollY > 565);

    let ratio7 = document.querySelector('.gfx__mark');
    ratio7.classList.toggle('gfx__animate', window.scrollY > 570);

    let ratio8 = document.querySelector('.seo__mark');
    ratio8.classList.toggle('seo__animate', window.scrollY > 575);
}





//hamburger menu
let navigator = document.querySelector('nav');
let navtoggle = document.querySelector('.menu__icon');

navtoggle.addEventListener('click', () => {
    let visibility = navigator.getAttribute('data-visible');
    
    if (visibility === "false") {
        navigator.setAttribute("data-visible", true);
        navtoggle.setAttribute("aria-expanded", true);
    } 
    else if (visibility === "true") {
        navigator.setAttribute("data-visible", false);
        navtoggle.setAttribute("aria-expanded", false);
    }
});





//close nav after clicking a any section
let linkbtn = document.querySelectorAll('.nav__link'); 

let btnVisibility = () => {
    let visibility = navigator.getAttribute('data-visible');

    if (visibility === "true") {
        navigator.setAttribute("data-visible", false);
        navtoggle.setAttribute("aria-expanded", false);
    }
};

linkbtn.forEach(btn => {
    btn.addEventListener('click', btnVisibility); 
});





//theme change
let page = document.querySelector('body');
let themebtn = document.querySelector('.theme__icon');

themebtn.addEventListener('click', () => {
    let light = page.getElementsByClassName('.light__theme');
        page.classList.toggle("light__theme");     //onclick it will add "light__theme" class to page and remove it if it's already present
        themebtn.classList.toggle("theme__icon2");  //onclick it will add "theme__icon2" class to themebtn and remove it if it's already present
});