import React from 'react';
import Pokecard from './Pokecard.js';
import './Pokedex.css';

function Pokedex(props){
   let title;
   if(props.isWinner){
    title = <h1 className="Pokedex-winner">Winning Hand!</h1>
   }
   else{
    title = <h1 className="Pokedex-loser">Losing Hand!</h1>
   }
    

    return (<div className="Pokedex">
                {title}
                <h4>Total Experience : {props.exp}</h4>
                
                <div className="Pokedex-cards">
                {
                    props.pokemon.map(pokemon => (
                        <Pokecard id = {pokemon.id} title = {pokemon.name} type={pokemon.type} exp={pokemon.base_experience}/>
                    ))
                }
                </div>
            </div>);
}

export default Pokedex;