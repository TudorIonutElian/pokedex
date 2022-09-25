import gameConfig from "../config/config";

export function generateRandomPokemonsNumber () {
    let number_of_pokemons = Math.floor(Math.random() * 10);

    if (number_of_pokemons < gameConfig.minimumPokemons) {
        number_of_pokemons = gameConfig.minimumPokemons;
    }

    if (number_of_pokemons > gameConfig.maximumPokemons) {
        number_of_pokemons = gameConfig.maximumPokemons;
    }

    return number_of_pokemons;
}

export function generateRandomPokemonsRound(totalPokemonsPerRound, pokemonNames, pokemonTypes) {
    let data_round = {
        pokemons: [],
        score: 0
    };

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
        data_round.score += pokemon.base_experience
        data_round.pokemons.push(pokemon)
    }

    console.log(data_round)
    return data_round;
}
