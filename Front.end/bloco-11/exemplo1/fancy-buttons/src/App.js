import React from 'react';
import './App.css';
import colors from './colorsData';

class App extends React.Component {
  
constructor(){
  super();
  this.state = {
    typedText : ""
  }
  this.handleChange = this.handleChange.bind(this);
  this.colorChange = this.colorChange.bind(this);
}
handleChange (event) {
 this.setState({
  typedText: event.target.value
 })
}

colorChange () {

  if(this.state.typedText === "") return "black";
  
  const colorName = colors.find((color) => color.name.includes(this.state.typedText))

  if (colorName) {
    return colorName.name;
  }

  return "black";
}


  render() {

    const {typedText} = this.state
    
    return (
    <div className='divmae'>
    <h1> Trybe Color Filter</h1>
    <input  type="text" value={typedText} onChange={this.handleChange} />
    <br></br>
    <p style={{backgroundColor : this.colorChange()}} > AQUI IMAGEM</p>
    <ul>
      {colors.filter((color) => color.name.includes(typedText))
      .map((color)=> (
        <li key={color.hex}>  
        <div className='divquadrado' style={{backgroundColor: color.name}}></div>
        {color.name} 
        </li>
      ))}
    </ul>
    </div>
    )}
}

export default App;