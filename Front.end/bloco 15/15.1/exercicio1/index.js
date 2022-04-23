const Redux = require('redux'); // ele importa o redux



const fazerLogin = (email) => ({ // isso é uma action
    type: "LOGIN",
    email});
  
const ESTADO_INICIAL = {
    login: false,
    email: "",
  };
  
const reducer = (state = ESTADO_INICIAL, action) => { // reducer atualiza o meu estado
    console.log(action.type);
    switch (action.type) {
      case "LOGIN":
        return {
          ...state, // todos os estados
          login: !state.login,
          email: action.email,
        };
      default: // No switch, sempre precisamos ter um caso default!
        return state;
    }
  };
  
const store = Redux.createStore(reducer); // aqui é a store do redux
  
store.dispatch(fazerLogin("alguem@email.com")); // despacha a action para dentro do reducer
  
console.log(store.getState());
  
  // { login: true, email: 'alguem@email.com' }