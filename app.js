gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.utils.toArray(".container").forEach((section) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 0vh",
      end: () => "+=" + section.offsetHeight - 400,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
    defaults: { ease: "none" },
  });

  tl.fromTo(
    section.querySelector(".main"),
    { yPercent: 0, y: 0 },
    { yPercent: -100 }
  );

  tl.from(
    section.querySelector(".contacts__container"),
    { opacity: 0, duration: 0.5 },
    { opacity: 1, duration: 0.5 }
  );
});

function scrollToContent() {
    window.scrollBy({
        top: 1200, 
        behavior: 'smooth' 
      });
  }

document
  .getElementById("scrollButton")
  .addEventListener("click", scrollToContent);
