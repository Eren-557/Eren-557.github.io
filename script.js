let crsr = document.querySelector('#crsr');

// document.addEventListener("mousemove", function(dets) {
//     crsr.style.left = `${dets.x -10}px`
//     crsr.style.top = `${dets.y - 10}px`

    
// })

let mouseX = 0, mouseY = 0;  // rabbit's position (real mouse)
let crsrX = 0, crsrY = 0;   // dog's position (#crsr)

document.addEventListener("mousemove", function(dets) {
    mouseX = dets.x - 10;   // update rabbit's position on mouse move
    mouseY = dets.y - 10;
})

function animate() {

    // Move 10% closer to the mouse every frame
    crsrX += (mouseX - crsrX) * 0.1;
    crsrY += (mouseY - crsrY) * 0.1;
    //         ↑ this is the gap

    crsr.style.left = `${crsrX}px`;
    crsr.style.top  = `${crsrY}px`;

    requestAnimationFrame(animate); // run this function again next frame
}

animate(); // start the loop



let crsrblur = document.querySelector('#crsr-blur');
let mouseX1 = 0, mouseY1 = 0;  // rabbit's position (real mouse)
let crsrX1 = 0, crsrY1 = 0;   // dog's position (#crsr)

document.addEventListener("mousemove", function(dets) {
    mouseX1 = dets.x - 250;   // update rabbit's position on mouse move
    mouseY1 = dets.y - 250;
})

function animate1() {

    // Move 10% closer to the mouse every frame
    crsrX1 += (mouseX1 - crsrX1) * 0.1;
    crsrY1 += (mouseY1 - crsrY1) * 0.1;
    //         ↑ this is the gap

    crsrblur.style.left = `${crsrX1}px`;
    crsrblur.style.top  = `${crsrY1}px`;

    requestAnimationFrame(animate1); // run this function again next frame
}

animate1(); // start the loop





gsap.to("#nav",{
    backgroundColor: "#000",
    height: "90px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        start: "top -10%",
        end: "top -11%",
        scrub:0.6
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        start:"top -20%",
        end: "top -70%",
        scrub:2,
    }
})

let imgallery = document.querySelector("#image-gallery")


let imgarray = ["https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5-1002x1024.jpg?strip=all", "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-e1702553754869.jpg?strip=all&w=682", "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1-682x1024.jpg?strip=all"]

function imgplace(img) {
    imgallery.style.backgroundImage = `url(${img})`;
    
}


setInterval(() => {
    let randomInt = Math.floor(Math.random()* 3);
    imgplace(imgarray[randomInt])
}, 3000);


gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        top: "top 55%",
        end:"top 45%",
        scrub:2
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#colon2",
        top: "65%",
        end:"top 55%",
        scrub:2
    }
})

gsap.from("#page5 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page5 h1",
        top: "top 75%",
        end: "end 70%",
        scrub: 3
    }
})


let posts = ['https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/656421256_18079362155566465_4145830140787945070_nlow.webp?strip=all&w=1920',
    'https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/655947305_1264786298564351_1676854904823822319_nlow.webp?strip=all&w=1920',
    'https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/641811141_788847073710039_8450481706051907308_nlow.webp?strip=all&w=1920',
    'https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/626285303_18074561672566465_3874950412289058425_nlow.webp?strip=all&w=1920',
    'https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/626748109_18073506611566465_5720570279416892780_nlow.webp?strip=all&w=1920',
    'https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/625000475_18072567188566465_2842117876093269533_nlow.webp?strip=all&w=1920',
    'https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/705988630_18085980434566465_7646364204463960074_nlow.webp?strip=all&w=1920',
    'https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/681995048_18082854842566465_2705007904521716534_nlow.webp?strip=all&w=1920',
    'https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/661819382_18082376576566465_5563700328928088309_nlow.webp?strip=all&w=1920',
    'https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/656832398_18080238914566465_5255298509537557452_nlow.webp?strip=all&w=1920'];


function postSlideImg() {
    posts.forEach((img)=>{
    let post = document.createElement("div");
    post.classList.add("post")
    post.style.backgroundImage = `url(${img})`;
    document.querySelector("#inner-posts").appendChild(post)
})
}

postSlideImg();
postSlideImg();
