document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in');
    faders.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 300 * index);
    });
});
