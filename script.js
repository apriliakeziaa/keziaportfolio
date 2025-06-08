document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.certification-slider');
    const nextBtn = document.querySelector('.slider-btn.next');
    const prevBtn = document.querySelector('.slider-btn.prev');

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: 350, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -350, behavior: 'smooth' });
    });
});
