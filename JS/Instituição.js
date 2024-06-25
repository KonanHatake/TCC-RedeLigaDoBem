document.addEventListener('DOMContentLoaded', function() {
    const teamContainer = document.querySelector('.team-container');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const cardWidth = cards[0].offsetWidth + 20; // Largura do card + gap
    const numCards = cards.length;
    let index = 0;

    function moveCarousel() {
        const offset = -index * cardWidth;
        teamContainer.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        index++;
        if (index > numCards - 1) {
            index = 0;
        }
        moveCarousel();
    }

    function prevSlide() {
        index--;
        if (index < 0) {
            index = numCards - 1;
        }
        moveCarousel();
    }

    // Adiciona eventos de clique para as setas de navegação
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
});

