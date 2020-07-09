const menu_open = document.querySelector('.header__menu-open')
const mobile_menu = document.querySelector('.navbar')
const menu_close = document.querySelector('.header__menu-close')
const overlay = document.getElementById('overlay')


menu_open.addEventListener('click', () => {
    mobile_menu.classList.add('navbar--display');
    menu_open.classList.add('header__menu-display--none')
    menu_close.classList.remove('header__menu-display--none');
    document.body.style.overflowY = 'hidden'
    overlay.style.display = 'block';
    // document.body.style.top =`-${window.SrollY}px`

})

menu_close.addEventListener('click', () => {
    mobile_menu.classList.remove('navbar--display');
    menu_open.classList.remove('header__menu-display--none')
    menu_close.classList.add('header__menu-display--none');
    document.body.style.overflowY = 'scroll'
    overlay.style.display = 'none';
})