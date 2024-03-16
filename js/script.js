const menu_burger = document.querySelector(".menu_burger")
const nav_menu_burger = document.querySelector(".nav_menu_burger")
const menu_burger_items = document.querySelectorAll(".menu_burger_item")

menu_burger.addEventListener("click", ()=> {
    menu_burger.classList.toggle("active")
    if (menu_burger.classList.contains("active")) {
        nav_menu_burger.classList.add('active')
        menu_burger_items.forEach(item => {
            item.classList.add('active')
        })
    } else {
        nav_menu_burger.classList.remove('active')
        menu_burger_items.forEach(item => {
            item.classList.remove("active")
        })
    }
})

window.addEventListener('resize', function() {
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
  });