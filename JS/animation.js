
gsap.utils.toArray(".cards-row .card").forEach((card) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
    });
});
gsap.from(".contact-boxes .get-in-touch", {
    scrollTrigger: {
        trigger: ".contact-boxes .get-in-touch",
        start: "top 85%",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".contact-boxes .contact-form", {
    scrollTrigger: {
        trigger: ".contact-boxes .contact-form",
        start: "top 85%",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});
gsap.to(".First-col", {
    x: "-=20%",           // left side slide
    duration: 10,
    ease: "linear",
    repeat: -1
});

gsap.to(".Second-col", {
    x: "+=20%",           // right side slide
    duration: 10,
    ease: "linear",
    repeat: -1
});
window.addEventListener("load", function(){
    setTimeout(function(){
        document.querySelector(".loader").classList.add("hide");
    }, 10); 
});