//* Atribuição via desestruturação (Objetos)

const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Eduardo',
    idade: 19,
    endereco: {
        rua: 'Rua Capitão Antonio Mendes de Souza Neto',
        bairro: 'Miramar',
        cidade: 'João Pessoa',
        estado: 'Paraíba'
    },
    estadoCivil: 'Solteiro'
}
//               valor padrão
const { nome = 'Não encontrado', sobrenome } = pessoa;
console.log(nome, sobrenome);

//Caso a pessoa queria trocar o nome da variável 
const { idade: idadeNum = 'Não encontrado', estadoCivil } = pessoa;
console.log(idadeNum, estadoCivil);


