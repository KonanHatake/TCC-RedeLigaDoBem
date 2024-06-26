bar1 = document.getElementsByClassName("bar1")

function toggleMenu() 
{

    let overlay = document.getElementById('overlay');
    overlay.style.display = "block";
    let closeButton = document.getElementById('hamburguer');
    closeButton.style.display = "block";
}

function fechar()
{
    let overlay = document.getElementById('overlay');
    overlay.style.display = "none";
    let closeButton = document.getElementById('hamburguer');
    closeButton.style.display = "none";
    
}