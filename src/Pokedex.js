import React, {Component} from 'react';
import Pokecard from "./Pokecard";
import "./Pokedex.css"
import {generateRandomPokemonsNumber, generateRandomPokemonsRound} from "./generatorUtils";
import PokedexRound from "./PokedexRound";

class Pokedex extends Component {
     constructor() {
        super();
        this.state = {}
    }

    componentWillMount(){
        const pokePerRound = generateRandomPokemonsNumber();
        const data_round1 = {
            id: 1,
            data: generateRandomPokemonsRound(pokePerRound, this.props.pokemon_names, this.props.pokemon_types)
        };
        const data_round2 = {
            id: 2,
            data: generateRandomPokemonsRound(pokePerRound, this.props.pokemon_names, this.props.pokemon_types)
        };

        this.setState(
            {
                data_round1,
                data_round2,
                winnerScore: data_round1.data.score > data_round2.data.score ? data_round1.data.score: data_round2.data.score
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
        return (
            <div className="Pokedex">
                <PokedexRound data={this.state.data_round1.data} winnerScore={this.state.winnerScore}/>
                <PokedexRound data={this.state.data_round2.data} winnerScore={this.state.winnerScore}/>
            </div>
        );
    }
}

export default Pokedex;