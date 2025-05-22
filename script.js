const hamburger = document.getElementById("hamburger");
const links = document.getElementById("links");
const body = document.body;

hamburger.addEventListener("click", () => {
    links.classList.toggle("open");
    hamburger.classList.toggle("open");
    body.classList.toggle("no-scroll");
});