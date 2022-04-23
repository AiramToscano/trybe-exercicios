
import React from "react";

class PokemonsItens extends React.Component {
    render() {
        const {pokemons1} = this.props
        return (
            <section>
            <h2>{pokemons1.name}</h2>
            <p>{pokemons1.type}</p> 
            <img src={pokemons1.image} alt="" />
            <p> {`Average weight: ${pokemons1.averageWeight.value} ${pokemons1.averageWeight.measurementUnit}`}</p>
           
          </section>
        )
    }
}

export default PokemonsItens;