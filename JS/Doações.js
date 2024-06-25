function showDiv(className) {
    // Esconde todas as divs de conteúdo
    var contents = document.querySelectorAll('#contentArea .content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });
    
    // Mostra a div de conteúdo correspondente ao botão clicado
    var activeContent = document.querySelector('#contentArea .' + className);
    activeContent.style.display = 'block';
}
s