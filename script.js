const colorSwatchToggler = document.querySelector('.color-swatch');
colorSwatchToggler.addEventListener('click', () => {
    colorSwatchToggler.classList.toggle('show-color-swatch');
});

const allColorGrid = document.querySelectorAll('.color-box');
const colors = ['#ff4d4d', '#e1b12c', '#ffaf40', '#ea2027'];

allColorGrid.forEach((color, index) => {
    color.addEventListener('click', () => {
        document.documentElement.style.setProperty('--primary', colors[index]);
    });
});