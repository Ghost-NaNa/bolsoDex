//Vi esse método e achei bem mais fácil, dps tenta usar isso no principal

//esse busca as cores em especifico e de alguma forma ajudou na sincronização, isso é uma gambiarra ao estilo Valve
export async function buscarCor(pkmId) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${pkmId}/`;

    let response = await fetch(url);

    let cor = await response.json();

    switch(cor.color.name.toLowerCase()) {
        case 'red':
            return '#FFB3B3';
        case 'blue':
            return '#B3D1FF';
        case 'yellow':
            return '#FFFFB3';
        case 'green':
            return '#B3FFB3';
        case 'black':
            return '#D1D1D1';
        case 'brown':
            return '#D9B3B3';
        case 'purple':
            return '#D1B3FF';
        case 'gray':
            return '#E0E0E0';
        case 'white':
            return '#FFFFFF';
        case 'pink':
            return '#FFB3D1';
        default:
            return '#FFFFFF';
    }
}


//Esse aqui busca o subnome do pokemon, tipo o pikachu que é chamado de "rato elétrico"
export async function buscaSubNome(pkmId) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${pkmId}/`;

    let response = await fetch(url);

    let subNome = await response.json();

    return subNome.genera[7].genus
}

export async function buscaDesc(pkmId) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${pkmId}/`;

    let response = await fetch(url);

    let desc = await response.json();

    console.log(desc)
}

