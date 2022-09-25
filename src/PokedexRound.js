import React, {Component} from 'react';
import Pokecard from "./Pokecard";

class PokedexRound extends Component {
    render() {
        return (
            <div className="Pokedex_line">
                {this.props.pokemons.data.map(pokemon => (
                    <Pokecard
                        id={pokemon.id}
                        name={pokemon.name}
                        type={pokemon.type}
                        exp={pokemon.base_experience}
                        key={pokemon.id}
                    />
                ))}
            </div>
        )
            ;
    }
}

export default PokedexRound;