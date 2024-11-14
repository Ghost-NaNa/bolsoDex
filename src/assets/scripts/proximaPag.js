export function passarPag(element, response) {
    
    let elemento_clicado = document.querySelector('#card' + element)

    if (elemento_clicado !== null) {

       console.log(elemento_clicado, response)

        sessionStorage.setItem('pikemom', JSON.stringify(response))
        location = 'descPkm.html'

    }

   
}