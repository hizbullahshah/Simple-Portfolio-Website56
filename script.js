const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".links");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
   navbar.classList.toggle("active");
});

const home = document.querySelector("#home-link");
const about = document.querySelector("#about-link");
const service = document.querySelector("#services-link");
const contact = document.querySelector("#contact-link");

home.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("home").scrollIntoView({behavior: "smooth"});

});

about.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("about").scrollIntoView({behavior: "smooth"});

});

service.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("services").scrollIntoView({behavior: "smooth"});

});

contact.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});

});