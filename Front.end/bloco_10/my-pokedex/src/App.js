import React from 'react';
import pokemons2 from './data';
import './App.css';
import Title from './Componentes/Title';
import Pokemons from './Componentes/Pokemons';
import Rodape from './Componentes/Rodape';



class App extends React.Component {
  render() {
    
    return (
      <>
     <Title texto ="Pokedex" />
     <Pokemons pokemons = {pokemons2} />
     <Rodape texto = "Feito por Airam" />
      </>
    )
  
  }
}

export default App;
