//* Funções geradoras

//Dependendo pode ser boa para performance

function* geradora1() {
    //Código...
    yield 'Valor 1';
    //Código...
    yield 'Valor 2';
    //Código... 
    yield 'Valor 3';
};

const g1 = geradora1();
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());