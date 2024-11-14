import { buscarCor } from "./buscaAtributos.js"

document.addEventListener('DOMContentLoaded', recuperarDados, )

let mainCard = document.querySelector("#cardColorido")
let pkmImagem = document.querySelector("#pkmImagem")
let pkmNome = document.querySelector("#pkmName")

async function recuperarDados() {
    const pkmRecuperado = JSON.parse(sessionStorage.getItem('pikemom'))
    
    // EM HIPÓTESE ALGUMA REMOVA ESSE CONSOLE.LOG
    // SEM ELE, POR ALGUM DJABO NÃO FUNCIONA

    console.log(pkmRecuperado)

    //Isso me lembre o caso do coco nos arquivos do tf2 kkkkkkk

   mainCard.style.backgroundColor = await buscarCor(pkmRecuperado.id) 

    exibirDados(pkmRecuperado)  
    for (let index = 0; index <= tipagem.length; index++) {
        tipagem(pkmRecuperado.types[index].type.name)
        
    }
}

function exibirDados(pkmRecuperado) {

    document.title = pkmRecuperado.name

    let icone = document.createElement('link')
    icone.rel = "icon"
    icone.href = pkmRecuperado.sprites.versions["generation-viii"].icons.front_default
    document.head.appendChild(icone)

    pkmImagem.setAttribute('src', pkmRecuperado.sprites.versions["generation-v"]["black-white"].front_default )  
    pkmNome.textContent = pkmRecuperado.name


}

function tipagem(pkmRecuperado) {

    const listType = document.querySelector('.pkmTypeList')

    let tagsTexto = ["div"]
    let listaTags = []
    for (let i = 0; i < tagsTexto.length; i++) {
        listaTags.push(document.createElement(tagsTexto[i]))
    }

    listaTags[0].textContent = pkmRecuperado
    listaTags[0].classList.add('tipos')

    console.log(listaTags[0])

    listaTags[0].style.backgroundColor = tipoCor(pkmRecuperado)
    listType.appendChild(listaTags[0])
}


function tipoCor(tipo) {
    let color;

    switch (tipo) {
        case 'water':
            color = '#00aaff';
            break;
        case 'fire':
            color = '#ff5722';
            break;
        case 'grass':
            color = '#4caf50';
            break;
        case 'electric':
            color = '#ffeb3b';
            break;
        case 'ice':
            color = '#00bcd4';
            break;
        case 'fighting':
            color = '#e53935';
            break;
        case 'poison':
            color = '#ab47bc';
            break;
        case 'ground':
            color = '#8d6e63';
            break;
        case 'flying':
            color = '#03a9f4';
            break;
        case 'psychic':
            color = '#e91e63';
            break;
        case 'bug':
            color = '#cddc39';
            break;
        case 'rock':
            color = '#8c7b5e';
            break;
        case 'ghost':
            color = '#9e9e9e';
            break;
        case 'dragon':
            color = '#3f51b5';
            break;
        case 'dark':
            color = '#212121';
            break;
        case 'steel':
            color = '#9e9e9e';
            break;
        case 'fairy':
            color = '#f48fb1';
            break;
        case 'normal':
            color = '#9e9e9e';
            break;
        default:
            color = '#ffffff'; 
            break;
    }

    return color;
}