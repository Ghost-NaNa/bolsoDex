let barraPesquisa = document.querySelector('#searchInput')

barraPesquisa.addEventListener('input', pegarTexto)

function pegarTexto() {
    
    barraPesquisa = barraPesquisa.value;
    let element = document.querySelectorAll('h2').values;
      
    for (i = 0; i < element.length; i++) { 
        if (element.values.includes(barraPesquisa)) {
            element[i].style.display = "none";
        }
        else {
            element[i].style.display = "block";                 
        }
    }
}