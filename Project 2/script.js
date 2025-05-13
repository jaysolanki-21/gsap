// Element selectors
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('.menu li');

// Set initial states
gsap.set(menu, { x: '100%' });
gsap.set(menuItems, { x: 50, opacity: 0 });

// GSAP timeline
const tl = gsap.timeline({ paused: true, reversed: true });

tl.to(menu, {
  x: '0%',
  duration: 0.5,
  ease: 'power2.out'
})
.to(menuItems, {
  x: 0,
  opacity: 1,
  duration: 0.4,
  stagger: 0.1,
  ease: 'power2.out'
}, "-=0.3");

// Event listeners
openMenuBtn.addEventListener('click', () => {
  if (tl.reversed()) {
    tl.play();
  }
});

closeMenuBtn.addEventListener('click', () => {
  if (!tl.reversed()) {
    tl.reverse();
  }
});
