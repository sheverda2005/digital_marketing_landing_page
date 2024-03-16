const menu_burger = document.querySelector(".menu_burger")
const nav_menu_burger = document.querySelector(".nav_menu_burger")
const menu_burger_items = document.querySelectorAll(".menu_burger_item")
const body = document.querySelector("body")


window.addEventListener('resize', function() {
    let newScreenWidth = window.innerWidth;
    if (newScreenWidth > 850) {
        nav_menu_burger.classList.remove("active")
        body.style.overflow = "visible"
        menu_burger.classList.remove("active")
    }
});


menu_burger.addEventListener("click", ()=> {
    menu_burger.classList.toggle("active")
    if (menu_burger.classList.contains("active")) {
        nav_menu_burger.classList.add('active')
        menu_burger_items.forEach(item => {
            item.classList.add('active')
            body.style.overflow = "hidden"
        })
    } else {
        nav_menu_burger.classList.remove('active')
        menu_burger_items.forEach(item => {
            item.classList.remove("active")
            body.style.overflow = "visible"
        })
    }
})

window.addEventListener('resize', function() {
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
  });