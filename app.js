

//gsap.to('.image-slider-left', {left:'-50vw', duration:3})


//Carousel

const swatches = document.querySelectorAll(".swatches-container-inner");
const image_slider_right = document.querySelector(".pimage-slider-right");
const image_slider_left = document.querySelectorAll(".image-slider-left");

let currentSwatch = "black";
let topIndex = 0;
var dict = {'black':0, 'green':1, 'red':2, 'blue':3};


swatches.forEach((swatch, index) => {
  //const coord = slides[index].getBoundingClientRect().left;

  swatch.addEventListener("click", (e) => {
    let swatchName = e.target.getAttribute("name");
    if (swatchName == null) return;
    console.log(swatchName)
    let cur_index = dict[swatchName];
    let closeUp = document.querySelectorAll("." + swatchName +'-div');
    let current = document.querySelectorAll("." + currentSwatch +'-div');
    console.log(closeUp)
    gsap.to(closeUp, {opacity:1, duration:1.5})
    gsap.to(current, {opacity:0, duration:1.5})
    //Check if we are on the same swatch
    if (currentSwatch === swatchName) return;
    currentSwatch = swatchName;
    if (cur_index > topIndex){
        gsap.to('.image-slider-left', {left: '-' + cur_index * 50 + 'vw', width: '' + (cur_index+1) * 50 + 'vw', duration:1.5})
        topIndex = cur_index
    }else{
        console.log('' + (cur_index) * 50 + 'vw')
        gsap.to('.image-slider-left', {left: '-' + (cur_index)*50 + 'vw', duration:1.5})
        topIndex = cur_index

    }


  });
});




const tlH = gsap.timeline({
    scrollTrigger: {
      trigger: ".introduction",
      markers: { startColor: "blue", endColor: "blue" },
      scrub: true,
      start: "0%",
      end: "50%",
      pin:true,
      
    },
  });

  const tlH2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".introduction",
      markers: { startColor: "blue", endColor: "blue" },
      scrub: true,
      start: "51%",
      end: "50%",
      pin:true,
      
    },
  });


tlH.fromTo('.home-img', {opacity:0.2,      left: '55%',transform: 'translate(-50%, 0)'},  {opacity:1, duration:6 });
tlH.fromTo('.indroduction-container', {opacity:"0.2"}, {opacity:"1"},'<+0.2');
tlH.fromTo('.indroduction-container', {top:"20%"}, {top:"-100%"},'<+1.5');



tlH.fromTo('.home-img', {opacity:1,      left: '55%',transform: 'translate(-50%, 0)'},  {opacity:0.2 } ,'+=0.5');

tlH.fromTo('.out', {bottom:"-20%"},  {top:"-20%", fontSize:"5rem", stagger:0.25 }, '+=0.3');
tlH.fromTo('body', {backgroundColor:'black'},  {backgroundColor:'white'});





//tlH.fromTo('.home-img', {opacity:0.2},  {opacity:0.6 })

 





      

//Page 5 video on scroll
const tlVideo = gsap.timeline({
    scrollTrigger: {
      trigger: ".info-section",
      start: "0%",
      end: "120%",
      scrub: true,
      pin:true,
      
     
      markers: { startColor: "blue", endColor: "blue" },
    },
  });

  
  tlVideo.fromTo(
    ".info-section h1",
    { opacity: 0 },
    { opacity: 1, stagger: 0.25, duration: 0.5 },
    "<"
  );

  tlVideo.fromTo(
    ".info-section h2",
    { opacity: 0 },
    { opacity: 1, stagger: 0.25, duration: 0.5 },
    "<+=0.1"
  );


  tlVideo.fromTo(
    ".info-section .info-section-img",
    { left: '20vw', top:'5vh' },
    { left: '22.5vw', duration: 0.5 },
    "<+=0."
  );


  const tlInfoTxt = gsap.timeline({
    scrollTrigger: {
      trigger: ".promotion-txt",
      start: "-40%",
      end: "60%",
      scrub: true,
    
      markers: { startColor: "blue", endColor: "blue" },
    },
  });



  tlInfoTxt.fromTo(
    ".txt-container p",
    {     color: "rgba(230, 230, 230, 0.6)"
    },
    { color:"rgba(255,255,255,1)", stagger:0.25},
    
  );