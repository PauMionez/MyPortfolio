// script.js
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".fade-in").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
  });
});


