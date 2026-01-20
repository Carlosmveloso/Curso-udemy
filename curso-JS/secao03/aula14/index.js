//* FOR IN
//O for in lê os índices das arrays ou chaves do objetos

const frutas = ['Banana', 'Maçã', 'Pera'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//Esse mesmo código usando for in


for (let i in frutas) {
    console.log(frutas[i]);
}

//For in com objetos

const pessoa = {
    nome: 'Carlos',
    idade: 19,
    sexo: 'Masculino',
    prof: 'Programador'
}

for (let i in pessoa) {
    console.log(`${i}: ${pessoa[i]}`);
}