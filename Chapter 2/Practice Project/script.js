gsap.from(".page1 .box", {delay : 1,duration: 1, opacity: 0,rotate:360});
gsap.from(".page2 .box", {duration: 1, opacity: 0,borderRadius: "70%",scrollTrigger: {
    trigger: ".page2 .box",
    scroller: "body",
    start: "top 70%",
    end: "bottom 60%",
    scrub: true,
}});