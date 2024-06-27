document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const cardWidth = cards[0].offsetWidth;
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    const totalCards = cards.length;
    let currentIndex = 0;

    function updateCarousel() {
        const middleIndex = Math.floor(visibleCards / 2);
        let centerIndex = currentIndex + middleIndex;

        if (centerIndex >= totalCards) {
            centerIndex -= totalCards;
        }

        const offset = (carousel.offsetWidth - cardWidth) / 2;
        carousel.style.transform = `translateX(calc(${offset}px - ${centerIndex * cardWidth}px))`;

        cards.forEach((card, index) => {
            const distanceFromCenter = Math.abs(centerIndex - index);
            const opacity = (distanceFromCenter === 0) ? 1 : (1 - distanceFromCenter * 0.2);
            card.style.opacity = opacity.toFixed(2);

            // Ajuste para responsividade
            card.style.flex = '0 0 auto'; // Garante que o tamanho seja automático
            card.style.maxWidth = `${cardWidth}px`; // Define a largura máxima para o card
        });
    }

    leftArrow.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalCards - 1;
        }
        updateCarousel();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= totalCards) {
            currentIndex = 0;
        }
        updateCarousel();
    });

    updateCarousel();

    // Atualiza o carrossel quando a janela é redimensionada
    window.addEventListener('resize', updateCarousel);
});



