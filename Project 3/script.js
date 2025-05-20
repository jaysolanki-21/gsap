var h1 = document.querySelector("h1");
var chars = h1.textContent.split("");

let clutter = "";

chars.forEach((char, index) => {
    if(index < ((chars.length - 1) / 2)) {
        clutter += `<span class="leftchar">${char}</span>`;
    } else {
        clutter += `<span class="rightchar">${char}</span>`;
    }
});

h1.innerHTML = clutter;

gsap.from(".leftchar", {
    y: "70%",
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    delay: 1
});

gsap.from(".rightchar", {
    y: "70%",
    opacity: 0,
    duration: 1,
    stagger: -0.5,
    delay: 1
});