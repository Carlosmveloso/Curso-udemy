//* Objetos
const pessoa1 = {
    nome: 'Carlos',
    sobrenome: 'Eduardo',
    idade: 19,
    profissao: 'Programador',
    //Método
    programar() {
        console.log(`${this.nome} está programando`)
    },
};

console.log(pessoa1);
pessoa1.programar();