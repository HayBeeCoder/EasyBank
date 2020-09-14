const menu_open = document.querySelector('.header__menu-open')
const mobile_menu = document.querySelector('.navbar')
const menu_close = document.querySelector('.header__menu-close')
const overlay = document.getElementById('overlay')


menu_open.addEventListener('click', () => {
    mobile_menu.style.display = 'block';
    mobile_menu.style.animation = `zoomMenu 0.4s ease-in`
    menu_open.classList.add('header__menu-display--none')
    menu_close.classList.remove('header__menu-display--none');
    document.body.style.overflowY = 'hidden'
    overlay.style.display = 'block';
})

menu_close.addEventListener('click', () => {
    mobile_menu.style.display = "none";
    menu_open.classList.remove('header__menu-display--none')
    menu_close.classList.add('header__menu-display--none');
    document.body.style.overflowY = 'scroll'
    overlay.style.display = 'none';
})

const allLinks = document.querySelectorAll("a")
for (let element of Array.from(allLinks)) { element.addEventListener("click", (event) => event.preventDefault()) }