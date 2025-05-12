const mouse = document.querySelector('.mouse');
const main = document.querySelector('main');
const box = document.querySelector('.box');

function moveMouse(e) {
  gsap.to(mouse, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: "power2.out"
  });
}

main.addEventListener('mousemove', moveMouse);

box.addEventListener('mouseenter', () => {
  mouse.innerHTML = "View More";
  mouse.style.width = "auto";
  mouse.style.height = "auto";
  mouse.style.padding = "0.5rem 1rem";
  mouse.style.borderRadius = "2rem";
});

box.addEventListener('mouseleave', () => {
  mouse.innerHTML = "";
  mouse.style.width = "2rem";
  mouse.style.height = "2rem";
  mouse.style.padding = "0";
  mouse.style.borderRadius = "50%";
});
