const getpokemon = require('excercicio8.js');

test('Testando letra maiusculas', (done) => {
    getpokemon('airam',(result) => {
      try {
        expect(result).toBe('AIRAM');
        done();
      } catch (error) {
        done(error);
      }
    },500);
  });