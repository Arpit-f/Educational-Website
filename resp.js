burger=document.querySelector('.burger')
navBar=document.querySelector('.navBar')
leftNav= document.querySelector('.leftNav')
rightNav=document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp')
    leftNav.classList.toggle('v-class-resp')
    navBar.classList.toggle('h-nav-resp')
})


// js for faculities section
let slidePosition=0;
const slides= document.getElementsByClassName('inv');
const totalSlides= slides.length 

document.getElementById('next').addEventListener('click', function () {
    moveToNextSlide();
      
})

document.getElementById('previous').addEventListener('click', function () {
    moveToPreviousSlide();  
})

function updateSlidePosition() {
    for (let slide of slides) {
         slide.classList.remove('section-visible')
         slide.classList.add('section-hidden')
    }
    slides[slidePosition].classList.add('section-visible');
}

function moveToNextSlide() {
    if (slidePosition===totalSlides-1) {
        slidePosition=0;
    }
    else{
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPreviousSlide() {
    if (slidePosition===0) {
        slidePosition=totalSlides-1;
    }
    else{
        slidePosition--;
    }
    updateSlidePosition();
}

