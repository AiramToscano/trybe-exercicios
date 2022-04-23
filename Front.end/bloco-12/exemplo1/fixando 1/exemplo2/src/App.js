import './App.css';
import React from 'react';


class App extends React.Component {

constructor(){
  super();
  this.shouldComponentUpdate=this.shouldComponentUpdate.bind(this);
  this.state = {
    dadosObj : [],
    loading: true
  }

}

async fechDades () {
  const dados = await fetch('https://api.randomuser.me/');
  const requestDados = await dados.json();
  this.setState({
    dadosObj: requestDados.results,
    loading: false,
  })
}

componentDidMount(){
  this.fechDades();
}

shouldComponentUpdate (e) {
  const {dadosObj} = this.state;

    return dadosObj.map(({email, name, picture, dob}) =>
    { if(dob.age < 50 ){ 
    return <div key={email}>
    <img src={picture.medium} />
    <p>{`${name.title} ${name.first} ${name.last}`}</p>
    <p>  {email}</p>
    <p> idade: {dob.age}</p>
    </div> 
    
    }
    else {
      return <p key={email}> Usario maior de 50 anos</p>
    }
  })
}

render() {
  const { loading } = this.state;
  const loadingElement = <span>Loading...</span>;
    
  return (
    <div>
    {loading ? loadingElement : this.shouldComponentUpdate() }
    
    </div>
  );
}
}

export default App;