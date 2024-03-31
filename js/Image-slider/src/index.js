import './style.css'
import ColorThief from '../node_modules/colorthief/dist/color-thief.mjs';
const images = [...document.querySelectorAll('.image')];
const navButons = [...document.querySelectorAll('.nav-icon')]
const leftArrow = document.querySelector('.image-slider-left-arrow');
const rightArrow = document.querySelector('.image-slider-right-arrow');

leftArrow.addEventListener('click',slideLeft);
rightArrow.addEventListener('click',slideRight);

function slideLeft(){
    let nextSlideIndex;
    images.forEach((element,index)=>{
        if (element.style.visibility==='visible' && !nextSlideIndex){
            nextSlideIndex = (index-1+ images.length) % images.length;
            element.style.visibility='hidden';
            element.style.opacity='0';
            images[nextSlideIndex].style.visibility='visible';
            images[nextSlideIndex].style.opacity='1';
            navButons[index].style.backgroundColor ='gray';
            navButons[nextSlideIndex].style.backgroundColor ='white';
            getDominantImageColor(nextSlideIndex);
        }
    })
};

function slideRight(){
    let nextSlideIndex;
    images.forEach((element,index)=>{
        if (element.style.visibility==='visible' && !nextSlideIndex){
            nextSlideIndex = (index+1) % images.length;
            element.style.visibility='hidden';
            element.style.opacity='0';
            images[nextSlideIndex].style.visibility='visible';
            images[nextSlideIndex].style.opacity='1';
            navButons[index].style.backgroundColor ='gray';
            navButons[nextSlideIndex].style.backgroundColor ='white';
            getDominantImageColor(nextSlideIndex);
        }
    })
};

function getDominantImageColor (index=0){
    // get the image
    const sourceImage = [...document.querySelectorAll('img')][index];
    // get the background element
    const background = document.querySelector('body');
    // initialize colorThief
    const colorThief = new ColorThief();
    // get color palette
    const color = colorThief.getColor(sourceImage);
    // set the background color
    background.style.backgroundColor = 'rgb(' + color + ')';
}

window.onload = () => {
    getDominantImageColor();
    setInterval(slideRight,5000);
    }


navButons.forEach((element,index)=>{
    
    element.addEventListener('click',()=>{
        const currentSlideIndex = images.indexOf(images.filter((item)=>{return item.style.visibility==='visible';})[0]);
        // change the previous image and nav button 
        images[currentSlideIndex].style.visibility='hidden';
        images[currentSlideIndex].style.opacity='0';
        navButons[currentSlideIndex].style.backgroundColor ='gray';
        // change the clicked one
        images[index].style.visibility='visible';
        images[index].style.opacity='1';
        element.style.backgroundColor ='white';
        getDominantImageColor(index);
    })
})