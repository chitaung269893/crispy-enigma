const menu = document.querySelector("#menu")
const navLinks = document.querySelector("#nav-links")
console.log(navLinks,menu)
menu.addEventListener("click",function(){
    navLinks.classList.toggle("active")
    if (navLinks.classList.contains("active")){
        menu.src = "../blog/imgs/icons/cross.svg"
    } else{
        menu.src = "../blog/imgs/icons/menu.svg"
    }
})