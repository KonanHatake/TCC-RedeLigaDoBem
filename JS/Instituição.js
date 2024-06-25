document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const carouselWidth = carousel.offsetWidth;
        const offset = (carouselWidth - cardWidth) / 2;
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(calc(${offset}px - ${currentIndex * cardWidth}px))`;

        cards.forEach((card, index) => {
            card.style.opacity = (index === currentIndex) ? '1' : '0.5';
        });
    }

    function jumpToCard(index) {
        const cardWidth = cards[0].offsetWidth;
        const carouselWidth = carousel.offsetWidth;
        const offset = (carouselWidth - cardWidth) / 2;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(calc(${offset}px - ${index * cardWidth}px))`;
    }

    leftArrow.addEventListener('click', () => {
        if (currentIndex === 0) {
            currentIndex = cards.length - 1;
            jumpToCard(currentIndex);
            setTimeout(() => {
                updateCarousel();
            }, 50);
        } else {
            currentIndex--;
            updateCarousel();
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentIndex === cards.length - 1) {
            currentIndex = 0;
            jumpToCard(currentIndex);
            setTimeout(() => {
                updateCarousel();
            }, 50);
        } else {
            currentIndex++;
            updateCarousel();
        }
    });

    updateCarousel();
});

