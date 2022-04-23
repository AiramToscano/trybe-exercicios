const getPlanet = () => {

    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    setTimeout(() => {
        console.log("Returned planet: ", mars); // Adicionar ao estoque
      }, 4000);
  };
  
  getPlanet(); // imprime Marte depois de 4 segundos

 