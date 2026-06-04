let crsr = document.querySelector("#cursor");
let crsrblur = document.querySelector("#cursor-blur");
let navimg =  document.querySelector("#nav img");



document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x +30+ 'px';
    crsr.style.top = dets.y + 'px'
    crsrblur.style.left = dets.x - 200+'px';
    crsrblur.style.top = dets.y - 200+ 'px'
    
})

let h4all = document.querySelectorAll("#nav h4")

h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        crsr.style.scale =3.5
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function() {
        crsr.style.scale = 1
        crsr.style.border = "0px solid rgb(149, 193, 30)"
        crsr.style.backgroundColor = "rgb(149, 193, 30)"
    })
})

        
navimg.addEventListener("mouseenter", function() {
    navimg.style.scale = 0.9
    crsr.style.scale =3.5
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"
})
navimg.addEventListener("mouseleave", function() {
    navimg.style.scale = 1
    crsr.style.scale = 1
    crsr.style.border = "0px solid rgb(149, 193, 30)"
    crsr.style.backgroundColor = "rgb(149, 193, 30)"
})




gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub:0.6
    }
})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger: "#main",
        scroll:"body",
        // markers:true,
        start: "top -50%",
        end: "top - 80%",
        scrub:2
    }
})


gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration: 1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "top 55",
        scrub: 0.6
    }

})

// gsap.from(".card",{
//     scale: 0.8,
//     opacity:0,
//     duration: 0.3,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end: "top 55",
//         scrub: 0.3
//     }

// })

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        // markers:true,
        top: "55%",
        end:"top 45%",
        scrub:2
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#colon1",
        // markers:true,
        top: "65%",
        end:"top 55%",
        scrub:2
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger: "#page4 h1",
        // markers:true,
        top: "top 75%%",
        end:"top 70%",
        scrub:3
    }

})