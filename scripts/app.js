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
console.log(totalSlides);

const button = document.getElementById('slider__gallery-controls');
button.addEventListener('click', () => {
  console.log('clicked');
});
