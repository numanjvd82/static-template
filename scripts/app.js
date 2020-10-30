const words = [
  'articles',
  'everything',
  'presentations',
  'applications',
  'landing pages',
];

let cursor = gsap.to('.cursor', {
  opacity: 0,
  ease: 'power2.inOut',
  repeat: -1,
});

let masterTimeline = gsap.timeline({ repeat: -1 });

words.forEach((word) => {
  let timeline = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
  timeline.to('.animate', { duration: 1, text: word });
  masterTimeline.add(timeline);
});

// Carousel

let slidePosition = 0;
const slides = document.getElementsByClassName('slider__gallery-img-container');
const totalSlides = slides.length;

// function for updating the slide position on clicking either of these buttons

const updateSlidePosition = () => {
  for (let slide of slides) {
    slide.classList.remove('visible');
  }
  slides[slidePosition].classList.add('visible');
};

// Event listener for the next slide button
const nextButton = document.getElementById('slider__gallery-control-next');
nextButton.addEventListener('click', () => {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
});

// Event listener for the previous slide button
const prevButton = document.getElementById('slider__gallery-control-prev');
prevButton.addEventListener('click', () => {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
});

// Smooth scrolling with js
