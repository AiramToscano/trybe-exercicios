const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
  .then((responsive) => responsive.json())
  .then((data) => console.log(data.value))
  .catch((error) => console.log(`Algo deu errado :( ${error})`)) ;

}

fetchJoke();