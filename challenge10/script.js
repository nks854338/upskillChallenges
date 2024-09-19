let section = document.querySelector("section");

window.addEventListener("scroll", () => {
  let val = window.scrollY;

  // Dynamically update the clip-path size based on scroll
  section.style.clipPath = `circle(${100 + val * 2.3}px at left center)`;
});
