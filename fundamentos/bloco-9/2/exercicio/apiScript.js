// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const append = (data) => { // função serve para manipular meu dom

    const getjoker = document.querySelector('#jokeContainer');
   

    getjoker.innerHTML = data;
}

const getPiada = (piada) => { // essa função serve para obter algo especifico do meu objeto
    return piada.joke;
}

 const fetchJoke = () => { // função serve para captar meu objeto no api
  const myObject = {
    method: 'GET', // perguntar em alguma monitoria
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((responsive) => responsive.json())
    .then((data) => append(getPiada(data)));
};

window.onload = () => fetchJoke();