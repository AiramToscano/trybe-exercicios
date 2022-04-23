const messageDelay = (delay = 5000) => Math.floor(Math.random() * delay);

const getMarsTemperature = (callback) => {
    setTimeout(() => {
  const maxTemperature = 58;
  console.log(callback( Math.floor(Math.random() * maxTemperature)));
}, messageDelay());
};

// crie a função sendMarsTemperature abaixo


const sendMarsTemperature = (celsio) => `Mars temperature is: ${celsio} degree Celsius`; // imprime "Mars temperature is: 20 degree Celsius", por exemplo

getMarsTemperature(sendMarsTemperature);