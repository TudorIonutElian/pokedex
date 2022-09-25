export function generateRandomPokemonsNumber () {
    let number_of_pokemons = Math.floor(Math.random() * 10);

    if (number_of_pokemons < 4) {
        number_of_pokemons = 4;
    }

    return number_of_pokemons;
}

export function generateRandomPokemonsRound(totalPokemonsPerRound, pokemonNames, pokemonTypes) {
    let pokemons_round = [];

    for (let i = 0; i < totalPokemonsPerRound; i++) {
        let randomInteger = Math.floor(Math.random() * 100)
        let randomNameInteger = Math.floor(Math.random() * pokemonNames.length);
        let randomTypeInteger = Math.floor(Math.random() * pokemonTypes.length);

        let pokemon = {
            id: randomInteger,
            name: pokemonNames[randomNameInteger],
            type: pokemonTypes[randomTypeInteger],
            base_experience: randomNameInteger + randomTypeInteger
        }
        pokemons_round.push(pokemon)
    }

    return pokemons_round;
}
