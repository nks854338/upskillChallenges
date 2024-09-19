const container = document.getElementById('container');
const boxes = document.querySelector('.boxes');

container.addEventListener('mousemove', (e) => {
    const containerWidth = container.clientWidth;
    const scrollWidth = boxes.scrollWidth;
    const x = e.clientX;

    const scrollPos = (x / containerWidth) * (scrollWidth - containerWidth);

    boxes.style.transform = `translateX(-${scrollPos}px)`;
});
