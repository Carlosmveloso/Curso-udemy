//* Método Splice
//Splice() = pop() + push() + shift() + unshift() + outras coisas

//              0          1          2          3        4           5
let nomes = ["Carlos", "Eduardo", "Marques", "Veloso", "Rachel", "Cavalcanti"];
//nomes.splice(Índice que vai começar, quantos elementos vai deletar, Elementos que vai adicionar separados por ,)
let removidos = nomes.splice(4, 2); //Deletei um elemento
console.log(nomes, removidos); //A função splice retorna também os itens removidos

let nomes1 = ["Carlos", "Eduardo", "Marques", "Veloso", "Rachel", "Cavalcanti"];
let removidos1 = nomes1.splice(-1, 2); //O Splice também aceita números negativos
console.log(nomes1, removidos);

let nomes2 = ["Carlos", "Eduardo", "Marques", "Veloso", "Rachel", "Cavalcanti"];
let removidos2 = nomes2.splice(4, 0, "José"); //Adicionando novos elemnetos
console.log(nomes2, removidos2);


let nomes3 = ["Carlos", "Eduardo", "Marques", "Veloso", "Rachel", "Cavalcanti"];
let removidos3 = nomes3.splice(4, 1, "José"); //Removendo e adicionando novos elemnetos
console.log(nomes3, removidos3);
