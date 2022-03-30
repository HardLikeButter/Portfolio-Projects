const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {

    document.body.classList.toggle("nav-open");

})

links.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    })
})