//* Filtrando arrays

//* Filter
//Sempre vai retornar um array, com a mesma quantidade de elementos ou menos.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

numeros.filter((numero) => {
    if (numero % 2 == 1) {
        console.log(numero)
    }
});

const pessoas = [
    {nome: "Carlos", idade: 19},
    {nome: "Maria", idade: 20},
    {nome: "Fernanda", idade: 20},
    {nome: "Eduardo", idade: 19},
    {nome: "Rachel", idade: 40},
    {nome: "Luiz" , idade: 21}
];

pessoas.filter((pessoa) => {
    if (pessoa.nome.length >= 5) {
        console.log(pessoa.nome, pessoa.idade)
    };

    if (pessoa.nome.toLowerCase().endsWith('a')) {
        console.log(pessoa.nome)
    };
})