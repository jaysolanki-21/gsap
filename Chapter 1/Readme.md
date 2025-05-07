# GSAP Basics - Day 1

Today I started learning GSAP (GreenSock Animation Platform). Here are the concepts I learned:

## 1. gsap.from()
- Animates the element *from* the given values to its current/default state.
- Example:
  js
  gsap.from(".box", {
    x: -200,
    opacity: 0,
    duration: 1
  });
  

## 2. gsap.to()
- Animates the element *to* the given values.
- Example:
  js
  gsap.to(".box", {
    x: 200,
    duration: 1
  });
  

## 3. stagger
- Used to animate multiple elements with a delay between each.
- Example:
  js
  gsap.to(".box", {
    x: 100,
    duration: 1,
    stagger: 0.2
  });
  

## 4. repeat
- Repeats the animation a given number of times.
- Example:
  js
  gsap.to(".box", {
    y: 100,
    duration: 1,
    repeat: 2
  });
  

## 5. x and y
- Shorthand for transform: translateX() and translateY().
- Example:
  js
  gsap.to(".box", {
    x: 100,
    y: 50
  });
  

## 6. duration
- Sets the duration of the animation in seconds.
- Example:
  js
  gsap.to(".box", {
    x: 100,
    duration: 2
  });
  

## 7. delay
- Delays the start of the animation by given seconds.
- Example:
  js
  gsap.to(".box", {
    x: 100,
    delay: 1
  });
  

## 8. Timeline
- Used to chain multiple animations in sequence.
- Example:
  js
  let tl = gsap.timeline();
  tl.to(".box", { x: 100, duration: 1 })
    .to(".box", { y: 100, duration: 1 })
    .to(".box", { opacity: 0, duration: 1 });
  

---
