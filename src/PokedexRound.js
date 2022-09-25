import React, {Component} from 'react';
import Pokecard from "./Pokecard";
import { isWinnerPokedexRound } from "./designUtils";

class PokedexRound extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="Pokedex_round">
                <h2>
                    Pokedex Round Score
                    <span
                        className={ isWinnerPokedexRound(this.props.data.score, this.props.winnerScore).css_class_round}>
                        {this.props.data.score}
                    </span>
                    <span
                        className={ isWinnerPokedexRound(this.props.data.score, this.props.winnerScore).css_class_text}>
                        {isWinnerPokedexRound(this.props.data.score, this.props.winnerScore).text}
                    </span>
                </h2>
                <div className="Pokedex_line">
                    {this.props.data.pokemons.map(pokemon => (
                        <Pokecard
                            id={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.type}
                            exp={pokemon.base_experience}
                            key={pokemon.id}
                            cssClass={isWinnerPokedexRound(this.props.data.score, this.props.winnerScore).css_class_border}
                        />
                    ))}
                </div>
            </div>
        )
            ;
    }
}

export default PokedexRound;