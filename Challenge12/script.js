document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let imageContainer = document.querySelector(".imageContainer");

  container.addEventListener("mousemove", (e) => {
    let containerRect = container.getBoundingClientRect();
    let offsetY = e.clientY;
    let height = containerRect.height;
    let percentage = (offsetY / height) * 100;
    let color = 255 - percentage * 3.5;
    imageContainer.style.clipPath = `inset(0 0 ${100 - percentage}% 0)`;
    container.style.backgroundColor = `rgb(${color},${color},${color})`;
  });
});
