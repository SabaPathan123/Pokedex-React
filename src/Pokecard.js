import React from 'react';
import './Pokecard.css';

function Pokecard(props){

    const Poke_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

    let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
    let imgSrc = `${Poke_API}${padToThree(props.id)}.png`;

    return (<div className = "Pokecard"> 
        
        <h3 className="Pokecard-title">{props.title}</h3>
        <img src={imgSrc} alt ={props.name}></img>
        <div className="Pokecard-data">Type : {props.type}</div>
        <div className="Pokecard-data">Exp : {props.exp}</div>
    </div>)
}

export default Pokecard;