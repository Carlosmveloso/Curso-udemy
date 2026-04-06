//* Return
//* Retorna um valor
//* Termina a função

function soma (a, b) {
    return a + b;
};

let valor = function soma1(a, b) {
    return a + b;
}

// console.log(valor(1, 2));

function criaPessoa (nome, sobrenome) {
    return {nome, sobrenome};
};

const p1 = criaPessoa('Carlos', 'Eduardo');

// console.log(valor(1, 2), p1);


function duplicar(n) {
    return n * 2;
};

function triplicar(n) {
    return n * 3;
};

function quadriplicar(n) {
    return n * 4;
};

console.log(duplicar(2));
console.log(triplicar(2));
console.log(quadriplicar(2));

// Função simplificada

function vezes(n, m) {
    return n * m;
}

console.log(vezes(2, 2));
console.log(vezes(2, 3));
console.log(vezes(2, 4));
