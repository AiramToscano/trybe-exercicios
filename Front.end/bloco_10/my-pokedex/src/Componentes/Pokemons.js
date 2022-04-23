import React from "react";
import PokemonsItens from "./PokemonsItens";
import pokemons2 from "../data"

class Pokemons extends React.Component {
    constructor () {
        super();
        this.state = {
            typedText : "",
            position: 0,
            typedPosition : pokemons2[0],
        }
        // this.handleChange = this.handleChange.bind(this);
        this.clickChange = this.clickChange.bind(this);
        this.clickChangeLess = this.clickChangeLess.bind(this);
        
    }

        // handleChange (e) {
        //  this.setState({
        //     typedText: e.target.value
        //  })
        // }

        clickChange(e) { // toda vez que eu quero pegar um estado anterior, preciso de um callback
            if(this.state.position === 9) return this.setState(() =>({
                position: 1,
            }));
           
            return this.setState((previestate) =>({
              position: previestate.position + 1,
          }))
        }
        clickChangeLess() {
            this.setState((previestate) =>({
                position: previestate.position - 1,
            }))
          }
        
        clickLimitLess () {
            if(this.state.position === 0) return "disabled"

            return "enable"
           
        }
         
        testeFunction () {
            if(this.state.position === 9) return pokemons2[0];

            return pokemons2[this.state.position];
        }
       
    render() {
        // const {pokemons} = this.props
        return (
               <div>
                   {console.log(this.state.position)}
                   {console.log(this.clickLimitLess())}
                <article>
                 {/* {pokemons.filter((pokemon) => pokemon.name.includes(this.state.typedText))
                .map(pokemon => <PokemonsItens key={pokemon.id} pokemons1={pokemon} />)}  */}
                 <PokemonsItens pokemons1 ={this.testeFunction()}/>
                 </article>
                 <button type="button" onClick={this.clickChangeLess}  > Anterior</button>
                 <button type="button" onClick={this.clickChange} > Proximo</button>
                 </div>
        )
    }
}


export default Pokemons;