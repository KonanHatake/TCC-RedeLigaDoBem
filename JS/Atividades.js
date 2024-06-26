bar1 = document.getElementsByClassName("bar1")

function toggleMenu() 
{

    let overlay = document.getElementById('overlay');
    overlay.style.display = "block";
    let closeButton = document.getElementById('hamburguer');
    closeButton.style.display = "block";
    let closeBars1 = document.getElementById('bar1')
    let closeBars3 = document.getElementById('bar3')
    closeBars1.style.backgroundColor = "#eec71c"
    closeBars3.style.backgroundColor = "#eec71c"
}

function fechar()
{
    let overlay = document.getElementById('overlay');
    overlay.style.display = "none";
    let closeButton = document.getElementById('hamburguer');
    closeButton.style.display = "none";
    let closeBars1 = document.getElementById('bar1')
    let closeBars3 = document.getElementById('bar3')
    closeBars1.style.backgroundColor = "#fff"
    closeBars3.style.backgroundColor = "#fff"
    
}