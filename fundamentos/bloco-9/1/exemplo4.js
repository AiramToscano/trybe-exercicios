const myExpenses = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
  const myIncome = 1000;

  const monthlyBudget = (myIncome, myExpenses, callback) => {

    const totalExpenses = callback(myExpenses);
    const totalAfterExpenses = myIncome - totalExpenses;
  
    console.log(`Balanço do mês:
      Recebido: R$${myIncome},00
      Gasto: R$${totalExpenses},00
      Saldo: R$${totalAfterExpenses},00 `);
  };

  const handleExpenses = myExpenses => {
    const eachValue = myExpenses.map((item) => Object.values(item)[0]); // pega meu objeto e 
    // transforma em um array
    const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
    return totalExpense;
  };
//   console.log(handleExpenses(myExpenses))
//   console.log(myExpenses.length)
  monthlyBudget(myIncome, myExpenses, handleExpenses);

