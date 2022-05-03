const { expect, assert } = require('chai');

const calculaSituacao = require('./exercicio1');

describe('Quando o numero é positivo', () => {
    it('retorna "positivo"', () => {
        const reposta = calculaSituacao(2)
        expect(reposta).to.be.equals('positivo');
    })
})

describe('Quando o numero é negativo', () => {
    it('retorna "negativo"', () => {
        const reposta = calculaSituacao(-2)
        expect(reposta).to.be.equals('negativo');
    })
})

describe('Quando o numero é neutro', () => {
    it('retorna "neutro"', () => {
        const reposta = calculaSituacao(0)
        assert.equal(reposta,'neutro');
    })
})

describe('Verificando se é um numero', () => {
    it('retorna "o valor deve ser um número"', () => {
        const reposta = calculaSituacao('b')
        assert.equal(reposta,'o valor deve ser um número');
    })
})