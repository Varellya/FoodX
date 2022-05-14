/*--------- Testimonials --------*/

const slider = document.querySelector('.testimonials');
const sliderBtns = slider.querySelectorAll('.testimonials_dot');

function nextTestimonials() {
    let allSlides = slider.querySelectorAll('.testimonials_item');
    let activeSlide = slider.querySelector('.active_item');

    let allDots = slider.querySelectorAll('.testimonials_dot');
    let activeDot = slider.querySelector('.active_dot');

    let arraySlides = Array.from(allSlides);
    let arrayDots = Array.from(allDots);

    let i = arraySlides.indexOf(activeSlide);

    if (i < arraySlides.length - 1) {
        i++;
    } else {
        i = 0;
    }

    let nextSlide = arraySlides[i];
    let nextDot = arrayDots[i];

    activeSlide.classList.remove('active_item');
    activeDot.classList.remove('active_dot');

    nextSlide.classList.add('active_item');
    nextDot.classList.add('active_dot');
}

let time = setInterval (nextTestimonials, 8000);

sliderBtns.forEach(btnSlider => {
    btnSlider.addEventListener('click', event => {
        let actualBtn = event.currentTarget;
        let activeBtn = slider.querySelector('.active_dot');

        let allSlides = slider.querySelectorAll('.testimonials_item');
        let activeSlide = slider.querySelector('.active_item');

        let arraySlides = Array.from(allSlides);
        let arrayBtns = Array.from(sliderBtns);

        let n = arrayBtns.indexOf(actualBtn);
        let nextSlide = arraySlides[n];

        activeSlide.classList.remove('active_item');
        activeBtn.classList.remove('active_dot');
    
        nextSlide.classList.add('active_item');
        actualBtn.classList.add('active_dot');
    })
})


/*--------- Navigation ----------*/

const navigation = document.querySelector('.header_nav');
const btnNavAll = navigation.querySelectorAll('[href]');

btnNavAll.forEach(btnNav => {
    btnNav.addEventListener('click', event => {
        event.preventDefault();

        let activeBtn = event.currentTarget;
        let blockId = activeBtn.getAttribute('href')

        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

