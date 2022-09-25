import React, { Component } from 'react';
import "./Pokecard.css"
import gameConfig from "../../config/config";


class Pokecard extends Component{
    render() {
        let imgSrc = `${gameConfig.POKE_API}${this.props.id}.png`;
        return (
            <div className={"Pokecard " + this.props.cssClass}>
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={ "Pokecard" + this.props.id}/>
                <div>Type: {this.props.type}</div>
                <div>Exp.: {this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;