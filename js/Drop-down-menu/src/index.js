import './style.css';

const dropDownMenuButton = document.querySelector('.navbar');
const dropDownMenu = document.querySelector('.menu');

dropDownMenuButton.addEventListener('click',toggleMenu);

function toggleMenu () {
    if (dropDownMenu.style.visibility === 'hidden'){
        dropDownMenu.style.visibility = 'visible';
        dropDownMenu.style.opacity = '1';
        dropDownMenu.style.transform = 'translateY(0)';

    } else {
        dropDownMenu.style.visibility='hidden'
        dropDownMenu.style.opacity = '0';
    }
};