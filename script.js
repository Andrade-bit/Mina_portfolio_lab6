document.getElementById('btn').addEventListener('click', function() {
    alert('Message sent!');
}); 

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // scrolling down
        navbar.style.top = "-80px"; 
    } else {
        // scrolling up
        navbar.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});