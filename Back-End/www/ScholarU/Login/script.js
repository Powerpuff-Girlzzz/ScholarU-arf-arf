const wrapper = document.querySelector('.wrapper');
const iconClose = document.querySelector('.icon-close');

document.addEventListener('DOMContentLoaded', () => {
    wrapper.classList.add('active');
});

iconClose.addEventListener('click', () => {
    wrapper.style.display = 'none';
});
