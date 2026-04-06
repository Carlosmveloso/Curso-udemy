//* Parâmentro de função

function funcao(nome) {
  console.log(nome);
}

funcao("Carlos");

function soma(a, b) {
  console.log(a + b)
}

soma(1, 2);

function soma2 (a, b=2, c) {
    console.log(a + b + c);
}

soma2(2, undefined, 24)