// SHOW MENU
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navOverlay = document.getElementById("nav-overlay");

// MENU SHOW
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu");
        navOverlay.classList.add("show-overlay");
    })
}

// MENU HIDDEN
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
        navOverlay.classList.remove("show-overlay");
    })
}

// Change background header
function scrollHeader(){
    const header = document.getElementById("header");
    if(this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}

window.addEventListener("scroll",scrollHeader);