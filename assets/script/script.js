let mainNav = document.getElementById('main-nav-id');
let humbergerIcon = document.getElementById('hamburger-icon-id');

humbergerIcon.addEventListener('click', function(){
    mainNav.classList.toggle('active');
});

let aboutUsClick = document.getElementById('about-click');
let meetGuideClick = document.getElementById('meet-click');
let contactUsClick = document.getElementById('contact-click');

let aboutUsScroll = document.getElementById('about-us');

aboutUsClick.addEventListener('click', function(){
    aboutUsScroll.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
});