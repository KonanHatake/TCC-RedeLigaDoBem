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