let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => 
{
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
}

window.onscroll = () =>
{
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
}

// Language button

const toggleLanguageButton = () => {
    const sel = document.getElementById('selectable');
    sel.classList.contains('active') ? sel.classList.remove('active') : sel.classList.add('active');
}

const changeLanguage = () => {
    const selectable = document.getElementById('selectable');
    const selected = document.getElementById('selected-lg');
    const tempText = selectable.textContent;
    selectable.textContent = selected.textContent;
    selected.textContent = tempText;
    toggleLanguageButton();
}