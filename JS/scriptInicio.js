//Hamburguer Botão

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

//Slider

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.galleryControls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel 
{

    constructor(container, items, controls)
    {
        this.carouselContainer = container;
        this,carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery()
    {
        this.carouselArray.forEach(el => 
        {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
        });

        this.carouselArray.slice(0, 5).forEach((el , i) => {
            el.classList.add(`gallery-item-${i+1}`);
        })
    }

    setCurrentState(direction)
    {
        if (direction.className == 'gallery-controls-previous')
            {
                this.carouselArray.unshift(this.carouselArray.pop());
            }
            else
            {
                this.carouselArray.push(this.carouselArray.shift());
            }
            this.updateGallery()
    }

    setControls()
    {
        this.carouselControls.forEach(control =>
        {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    useControls()
    {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => 
            {
                control.addEventListener('click', e =>{
                    e.preventDefault();
                    this.setCurrentState(control);
                });
            });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();