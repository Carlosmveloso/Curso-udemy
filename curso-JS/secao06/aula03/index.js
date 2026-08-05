//* Métodos úteis para objetos

// Object.value -> Usado para pegar um valor de um obejto
// Object.entires
// Object.assign(des, any) -> Usado para copiar um objeto. 
// Object.getOwnPropertyDescriptor(o, 'prop') -> Ele mostra a propriedade da chave de um objeto
// ...(spread) -> Espalhar o conteúdo do objeto dentro de alguma coisa

// Já vimos

// Object.keys (Retorna as chaves)
// Object.freeze (Congela o objeto)
// Object.defineProperties (defina várias propriedades)
// Object.defineProperty (defina uma propriedade)

//* Dessa forma você só referência a duas variáveis para o mesmo lugar na memória
const pessoa = {
  nome: "Carlos",
  idade: 20,
};
const pessoa2 = pessoa;
((pessoa2.nome = "Rachel"), console.log(pessoa));
console.log(pessoa2);

//* Assim você está copiando de uma variável e colando em outro lugar na memória
const produto = {
  nome: "Notebook",
  estoque: 10,
};
const produto2 = {
  ...produto,
  preco: 1200,
};
produto2.nome = "Iphone";
produto2.preco = 1100;

console.log(produto);
console.log(produto2);

//Exeplo do uso do Object.getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(produto2, "nome"))