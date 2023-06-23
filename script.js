let currentPokemon;


async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/charmander`
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log(currentPokemon);
    console.log(currentPokemon['sprites']['other']['official-artwork']['front_default']);


    renderPokemonInfo();
}


function renderPokemonInfo() {
    let resultName = renderPokemonName();
    document.getElementById('pokemonName').innerHTML = resultName;
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
}


function renderPokemonName() {
    let currentPokemonName = currentPokemon['name'];
    let firstLetter = currentPokemonName.charAt(0).toUpperCase();
    let resultName = firstLetter + currentPokemonName.slice(1);
    return resultName;
}