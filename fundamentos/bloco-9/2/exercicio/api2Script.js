// api.js
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url) // o await só pode ser usado dentro de uma função async
  // e faz a função esperar uma resposta para continuar sua execução.
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const criptofetch = async () => {

  const funcaocoins = await fetchCoins();

 const lista = document.getElementById('cripto');


  funcaocoins.filter((data) => Number(data.rank) <= 10) // server para transformar string em numero.
  .forEach((arrays) => {
    const createelementlist = document.createElement('li');
    createelementlist.className ='moedas';
    createelementlist.innerHTML = `${arrays.id}: ${arrays.symbol} = valor em dolar : ${arrays.priceUsd}`;
    lista.appendChild(createelementlist);

  });

lista.addEventListener('click' ,() =>  {
    console.log('teste');
})

}



window.onload = () => criptofetch();