import React, { Component } from 'react';
import "./Pokecard.css"
import gameConfig from "../../config/config";
import BestRoundScorer from "../BestRoundScorer/BestRoundScorer";


class Pokecard extends Component{
    render() {
        let imgSrc = `${gameConfig.POKE_API}${this.props.id}.png`;
        let bestRoundScorer = "";

        if(this.props.isBestScorerOfRound === true) {
            bestRoundScorer = <BestRoundScorer cssClass={this.props.cssClass}/>
        }
        return (
            <div className={"Pokecard " + this.props.cssClass}>
                <h2>{this.props.name}</h2>
                <img src={imgSrc} alt={ "Pokecard" + this.props.id}/>
                <div>Type: {this.props.type}</div>
                <div>Exp.: {this.props.exp}</div>
                { bestRoundScorer }
            </div>
        );
    }
}

export default Pokecard;