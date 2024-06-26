function showDiv(className) {
    var contents = document.querySelectorAll('#contentArea .content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });
    var activeContent = document.querySelector('#contentArea .' + className);
    activeContent.style.display = 'block';
}


bar1 = document.getElementsByClassName("bar1")

function toggleMenu() 
{

    let overlay = document.getElementById('overlay');
    overlay.style.display = "block";
    let closeButton = document.getElementById('hamburguer');
    closeButton.style.display = "block";
    let closeBars1 = document.getElementById('bar1')
    let closeBars3 = document.getElementById('bar3')
    closeBars1.style.backgroundColor = "#bd1616"
    closeBars3.style.backgroundColor = "#bd1616"
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