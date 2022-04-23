
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
// padrão de testes para evitar falso-positivos.
test('Testando letra maiusculas', (done) => {
  uppercase('airam',(result) => {
    try {
      expect(result).toBe('AIRAM');
      done();
    } catch (error) {
      done(error);
    }
  },500);
});