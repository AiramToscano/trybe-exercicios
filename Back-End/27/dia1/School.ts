
class School {
    matricula: string;
    nome: string;
    notas_provas: number[];
    notas_trabalhos: number[];

    constructor(matricula: string, nome: string, notas_provas: number[], notas_trabalhos: number[]) {
     this.matricula = matricula;
     this.nome = nome;
     this.notas_provas = notas_provas;
     this.notas_trabalhos = notas_trabalhos;
    }

    calculanotasSoma(notas_provas: number[]) {
        const soma = notas_provas.reduce((total: number, numero: number) => {
            return total + numero;
        }, 0);
       console.log(`A soma total das notas é: ${this.nome} é : ${soma}`)
    }

    calculamediaAluno(notas_provas: number[], notas_trabalhos: number[]) {
        const somanotasprovas = notas_provas.reduce((total: number, numero: number) => {
            return total + numero;
        }, 0);
        const somanotastrabalhos = notas_trabalhos.reduce((total: number, numero: number) => {
            return total + numero;
        }, 0);
        const mediaprova = somanotasprovas / notas_provas.length;
        const mediatrabalhos = somanotastrabalhos / notas_trabalhos.length;
        const notafinal = (mediaprova + mediatrabalhos) /2;
        console.log(`Media final do aluno ${this.nome} é igual a : ${notafinal}`)
        if(notafinal >= 6) {
            console.log(` o Aluno ${this.nome} está aprovado`)
        }
        if(notafinal < 6) {
            console.log(` o Aluno ${this.nome} está reprovado`)
        }
    }
}

const aluno1 = new School('almeida' , 'airam', [8,7,8], [2,3,1])

aluno1.calculanotasSoma(aluno1.notas_provas);
aluno1.calculamediaAluno(aluno1.notas_provas, aluno1.notas_trabalhos);