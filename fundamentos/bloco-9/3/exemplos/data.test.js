const getSuperHero = require('./script');

test('Testa se o resultado é um falso positivo, com async/await', async () => {
    const hero = await getSuperHero('https://www.superheroapi.com/api.php/4192484924171229/720');
    expect(hero).toBe('V de Vingança');
  });