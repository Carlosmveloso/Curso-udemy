//* Arrays
// Os array são indexados por elemento
//                 0          1         2          3
const alunos = ["Carlos", "Eduardo", "Rachel", "Veloso"];

console.log(alunos);
console.log(alunos.length)

//Adiciona no final do array
alunos.push('Marques');
console.log(alunos);

//Adiciona no início do array
alunos.unshift('Momozão');
console.log(alunos);

//Remover elementos no final do array
alunos.pop();
console.log(alunos);

//Pega o elemento removido e salva em uma variável
const removido = alunos.pop();
console.log(removido);
console.log(alunos)

//Remover elementos no início do array
alunos.shift();
console.log(alunos);

//Deletar um elemento sem alterar o índice
delete alunos[1];
console.log(alunos);

    
