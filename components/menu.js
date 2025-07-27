export const menuMobile = () => {
    const icon = document.querySelector('#icon-menu');
    const menu = document.querySelector('.menu');

    icon.addEventListener('click', () => {

        if(!menu.classList.contains('menuAtivo')) {
            menu.classList.add('menuAtivo');
            icon.setAttribute("src", "../assets/images/menu-style-two.svg");
        } else {
            menu.classList.remove('menuAtivo')
            icon.setAttribute("src", "../assets/images/menu.svg");
        }
    })
}