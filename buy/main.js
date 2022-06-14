const tlH = gsap.timeline({
    scrollTrigger: {
      trigger: ".c1",
      markers: { startColor: "blue", endColor: "blue" },
      scrub: true,
      start: "-50%",
      end: "-25%%",
    },
  });


tlH.fromTo('.upperdiv-left', {transform: "translate(-1000%,0)"},  {transform: "translate(0,0)"});
tlH.fromTo('.c1 .bottomdiv-right', {transform: "translate(1000%,0)"},  {transform: "translate(0,0)"}, '<+0.5');

