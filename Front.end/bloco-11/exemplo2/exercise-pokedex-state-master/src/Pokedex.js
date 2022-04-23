import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor () {
        super();
        this.state = {
            typedText : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

        handleChange (e) {
         this.setState({
            typedText: e.target.value
         })
        }
    
    render() {
        
        return (        
            <div>
                <input type="text" value={this.state.typedText} onChange={this.handleChange} />
            <div className="pokedex">
                {this.props.pokemons.filter((pokemon) => pokemon.name.includes(this.state.typedText)).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
            </div>
        );
    }
}

export default Pokedex;