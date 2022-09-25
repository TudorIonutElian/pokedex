import React, {Component} from 'react';
import Pokecard from "./Pokecard";
import "./Pokedex.css"
import {generateRandomPokemonsNumber, generateRandomPokemonsRound} from "./generatorUtils";

class Pokedex extends Component {
     constructor() {
        super();
        this.state = {}
    }

    componentWillMount(){
        const pokePerRound = generateRandomPokemonsNumber();
        const pokemons_round1 = generateRandomPokemonsRound(pokePerRound, this.props.pokemon_names, this.props.pokemon_types);
        const pokemons_round2 = generateRandomPokemonsRound(pokePerRound, this.props.pokemon_names, this.props.pokemon_types);

        this.setState(
            {
                pokemons_round1,
                pokemons_round2
            }
        )
    }
    static defaultProps = {
        pokemon_names: [
            "Vic Doubloon",
            "Leroy Cocksman",
            "Sword Williams",
            "Biscuits Galore",
            "Bo Dogs",
            "Aristotle Croissant",
            "Ned Eleven",
            "Lefty Tornado",
            "Jam Lazarus",
            "Benji Dracula",
            "Ghengis Fitzpatrick",
            "Scooter Tootz",
            "Tommy Goulash",
            "Mortimer Disco",
            "Dr. Red Dinoblades",
            "Rick Stick",
            "Callaway Bentley",
            "Doc Liberty",
            "Randy Pulverize",
            "Jaxx Barcelona",
            "Joey Zebra",
            "Pierre Sousaphone",
            "Trent Birthday",
            "Hunter Clink",
            "Dr. Wink Sandstorm",
            "Quincy Bazooka",
            "Bozz Maroon",
            "Kirk Antigua",
            "Nicky Tarantula",
            "Scooter Fungo",
            "Reverend Bobo Maximus",
            "Kelvin Fahrenheit",
            "Willy Magnum",
            "Felix Cancun",
            "Zipp Chesterfield",
            "Buster Lazenby",
            "Bosco Chernobyl",
            "Leviticus Flume",
            "Rodney Caracas",
            "Gurd Mabloon",
            "Bernie Buckets",
            "Pierre Hackeysack",
            "Dabney Whistleblower",
            "Frank Tokyo",
            "Velvet Caruthers",
            "Chester Chesterfield",
            "Casanova Wildfire",
            "Elliot Vape",
            "Razz Kerplop",
            "Lancaster Von Amsterdam"
        ],
        pokemon_types: ["fire", "water", "bug", "flying", "electric", "normal", "poison"]
    }

    render() {
         console.log(this.state)
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <div className="Pokedex_line">
                    {this.state.pokemons_round1.map(pokemon => (
                        <Pokecard
                            id={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.type}
                            exp={pokemon.base_experience}
                            key={pokemon.id}
                        />
                    ))}
                </div>

                <div className="Pokedex_line">
                    {this.state.pokemons_round2.map(pokemon => (
                        <Pokecard
                            id={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.type}
                            exp={pokemon.base_experience}
                            key={pokemon.id}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;