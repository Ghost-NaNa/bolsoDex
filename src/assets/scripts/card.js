import { buscarCor } from "./buscaAtributos.js"
import { buscaSubNome } from "./buscaAtributos.js"
import { passarPag } from "./proximaPag.js"

const cards_container = document.querySelector('.cards-container')

 let salvaPkm =  []

// isso cria e imprime as tags de forma mais simplificada que nosso último projeto
export async function criarCards(response, i) {
    let tagsTexto = ['div', 'div', 'h2', 'h3', 'div', 'img']
    let listaTags = []
    for (let i = 0; i < tagsTexto.length; i++) {
        listaTags.push(document.createElement(tagsTexto[i]))
    }

    //aqui ele vai definir a cor, não mexe
    let corDoPkm = await buscarCor(i)

    //Aqui ele vê o subnome
    let subNome = await buscaSubNome(i)

   

    //Aqui ele atribui os atributos (fui de mr antítese para senhor pleonasmo)
    listaTags[0].classList.add('pkmcard')
    listaTags[4].classList.add('pkmcard-image');
    listaTags[1].classList.add('pkmNomes')

    //aqui fica as respostas 
    listaTags[0].style.backgroundColor = corDoPkm
  
    listaTags[2].textContent = await response.name
    listaTags[1].id = 'card' + i

    // isso aqui salva qual pikemon foi clicado
    listaTags[0].addEventListener('click', function() { 
       passarPag(i, response)
    })


    listaTags[3].textContent = subNome
    listaTags[5].setAttribute('src', response.sprites.versions["generation-v"]["black-white"].animated.front_default) 


    //implementei os filhos assim, se tiver errado é culpa do paulo
    cards_container.appendChild(listaTags[0])
    listaTags[4].appendChild(listaTags[5])
    listaTags[1].appendChild(listaTags[2]) 
    listaTags[1].appendChild(listaTags[3])
    listaTags[0].appendChild(listaTags[4]) 
    listaTags[0].appendChild(listaTags[1])

    salvaPkm.push(JSON.stringify(response))
} 