// get the Element

const navbar = document.querySelector("nav");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");


//toggle the navbar menu on click open/ close

menuBtn.addEventListener("click", () =>{
    navbar.classList.toggle("nav-background");
    menu.classList.toggle("nav-toggle")
});