import './style.css';

const showOverlayButton = document.querySelector('.showOverlay');
const closeOverlayButton = document.querySelector('#close');
showOverlayButton.addEventListener('click',showOverlay);
closeOverlayButton.addEventListener('click',closeOverlay);
function showOverlay(){
    const menu = document.querySelector('.Overlay');
    menu.style.transform='translate(73%,75%)';
    menu.style.transition = 'transform .55s ease-out';
    closeOverlayButton.style.visibility='visible';
    closeOverlayButton.style.transition='opacity 1s ease';

    closeOverlayButton.style.opacity='1';


};

function closeOverlay(){
    const menu = document.querySelector('.Overlay');
    menu.style.transform='translate(0%,0%)';
    menu.style.transition = 'transform .55s ease-in'; 
    closeOverlayButton.style.visibility='hidden';
    closeOverlayButton.style.opacity='0';


};