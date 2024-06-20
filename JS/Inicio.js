function myFunction(x) 
{
    x.classList.toggle("change");
}

/* Quando o usuário clica no botão,
alternar entre ocultar e mostrar o conteúdo suspenso */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Feche o menu suspenso se o usuário clicar fora dele
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//Galeria

const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');

let currentIndex = 0;

carousel.querySelector('.prev').addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1; 
  } 
  updateCarousel(); 
});

carousel.querySelector('.next').addEventListener('click', () => { 
currentIndex++; 
if (currentIndex > images.length - 1) {
 currentIndex = 0; 
} 
  updateCarousel(); 
});

function updateCarousel() {
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}