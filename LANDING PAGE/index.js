const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar ul");
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('nav');
console.log(navbar);

hamBurger.addEventListener("click", function(){
    hamBurger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

navLinks.forEach((n) =>{
    if(n.textContent === "Home"){
        navbar.style.backgroundColor = "transparent";
    }
    n.addEventListener("click", ()=>{
    hamBurger.classList.remove("active");
    navMenu.classList.remove("active");
    })
}
)

gsap.timeline().from(".hero-content h1", {
    opacity: 0,
    x: -100,
    duration: 0.5,

}).from(".hero-content h3", {
    opacity: 0,
    x: 100,
    duration: 0.5
})
        .from(".hero-btn", {
            opacity: 0
        })


// gsap.from(".hero-content h1, .hero-content h3, .hero-content-btn", {
//     stagger: 0.4,
//     opacity : 0,
//     x : 100,
//     duration: 0.5
// })

gsap.from(".about-content h1, .about-content p", {
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".about-content h1",
        start: "top 60%", 
        end : "bottom 20%",   

        scroller: "body",
        // markers: true,
        scrub: 1
    },
    x: -50,
    opacity: 0,
    duration: 1
})

gsap.from(".about-image", {
    scrollTrigger: {
        trigger: ".about-content h1",
        start: "top 60%", 
        end : "bottom 20%",  
        scroller: "body",
        
        scrub: 1
    },

    x: 60,
    duration: 1
})


gsap.from("#services .card-container .service-card, #services h1", {

    // duration : 1,
    scrollTrigger:{
        trigger : "#services h1",
        scroller : "body",
        start: "top 60%", 
        end : "bottom 20%",  
        scrub: 1
    },

    opacity : 0,
    x: 100,
    // y: -100,
    duration: 1,
})

gsap.to("nav", {
    scrollTrigger : {
        trigger : "main",
        scroller : "body",
        scrub:1
    },
    backgroundColor : "black",
    color : "#fff",
})
// gsap.to("nav", {
//     scrollTrigger : {
//         trigger : ".hero",
//         scroller : "body",
//     },
//     backgroundColor : "transparent",
//     color : "#fff",
// })