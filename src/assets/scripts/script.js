import { criarCards } from "./card.js"

//Isso aqui faz só rodar quando todas as requisições forem feitas, ai evita aquele erro na ordem deles
async function Esperarfetch() {
    for (let i = 1; i <= 649; i++) {
       
        let url = `https://pokeapi.co/api/v2/pokemon/${i}/`

            await fetch(url)

            .then(response => response.json())

            .then(response => {

                criarCards(response, i)

            })

    
    }
}

Esperarfetch()

