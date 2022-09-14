const nav = document.querySelector(".header-nav");
const burger = document.querySelector(".header-burger");

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    // console.log(burger.getAttribute("data-color"));      /* ATTRIBUT OLADI */
    // console.log(burger.setAttribute("burger", 4098));    /* ATTRIBUT QOSHADI */
})


const lists = document.querySelectorAll('.header-menu__items');
lists.forEach((elem) => {
    elem.addEventListener("click", () => {
        nav.classList.remove("open");
    })
})