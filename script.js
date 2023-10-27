'use strict';

///////////////////////////////////////
//Scroll to

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const navContainer = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const lazyImgs = document.querySelectorAll('.lazy-img');

btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Page navigation smooth

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  // Guard clause
  if (!clicked) return;
  //Active tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //Activate content area
  tabsContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu Fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
navContainer.addEventListener('mouseover', handleHover.bind(0.5));

navContainer.addEventListener('mouseout', handleHover.bind(1));

// sticky navigation
const header = document.querySelector('.header');
const navHeight = navContainer.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navContainer.classList.add('sticky');
  else navContainer.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   if (window.scrollY >= 0) navContainer.classList.add('sticky');
//   else navContainer.classList.remove('sticky');
// });

//Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});
//////////////////// Lecture //////////////////////
// const allButtons = document.getElementsByTagName('button');
// const header = document.querySelector('.header');
// // creating and inserting elements

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent =
//   'We use cookiies for improved functionality and analytics';
// message.innerHTML =
//   'We use cookiies for improved functionality and analytics. <button class="btn btn--close--cookie"> Got it!</button>';
// header.prepend(message);

// document.querySelector('.btn--close--cookie').addEventListener('click', () => {
//   message.remove();
// });

// //styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px;';

// document.documentElement.style.setProperty('--color-primary', 'orangered');
// const logo = document.querySelector('.nav__logo')
// console.log(logo.attributes)

// console.log(logo.src)
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href)
// console.log(link.getAttribute('href'))

// //Data attributes
// console.log(logo.dataset.versionNumber)
// logo.classList.toggle('c')
// console.log(logo)
// logo.classList.toggle('c');
// console.log(logo);

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.getElementById('section--1');

// btnScrollTo.addEventListener('click', e => {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
//   console.log(
//     'height and witdh',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   // window.scrollTo(s1coords.left, s1coords.top+window.pageYOffset);

//   // window.scrollTo({
//   //   left: s1coords.left,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// const h1 = document.querySelector('h1');

// // h1.addEventListener('mouseenter', e => {
// //   console.log(e);
// // });
// h1.onmouseenter = e => {
//   console.log(e);
// };

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'white';
// console.log(h1.lastElementChild);
// h1.lastElementChild.style.color = 'blue';

// console.log(h1.parentElement);
// console.log(h1.closest('.header') )
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };
// const obsOptions = {
//   root: null, // target element to intersect (null) to observe intersection with viewport
//   threshold: 0.1, // percentage of intersection at which the observer callback will be called
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// function parseInt(s) {
//   let result = 0;
//   const wordToNumber = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//     ten: 10,
//     eleven: 11,
//     twelve: 12,
//     thirteen: 13,
//     fourteen: 14,
//     fifteen: 15,
//     sixteen: 16,
//     seventeen: 17,
//     eighteen: 18,
//     nineteen: 19,
//     twenty: 20,
//     thirty: 30,
//     forty: 40,
//     fifty: 50,
//     sixty: 60,
//     seventy: 70,
//     eighty: 80,
//     ninety: 90,
//     hundred: 100,
//     thousand: 1000,
//     million: 1000000,
//   };
//   const words = s.split(/[ -]/);
//   for (let word of words) {
//     for (let [key, value] of Object.entries(wordToNumber)) {
//       if (word === 'hundred') {
//         result *= 100;
//         break;
//       }
//       if (word === 'thousand') {
//         result *= 1000;
//         break;
//       }

//       if (word === key) {
//         result += value;
//         break;
//       }
//     }
//   }
//   console.log(result);
// }

// // parseInt('one');
// // parseInt('twenty');
// parseInt('Two hundred forty-six');
// // parseInt('two hundred and three');
// // parseInt('seven hundred eighty-three thousand nine hundred and nineteen');
