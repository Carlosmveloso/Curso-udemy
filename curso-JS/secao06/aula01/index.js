//* Revisando objetos
// Quando temos functions dentro de objetos, nós chamamos de métodos
const pessoa = {
  name: "Carlos",
  surname: "Eduardo",
  age: 19,
};
console.log(pessoa);

delete pessoa.age;
console.log(pessoa);

//* Exemplos de design pattern
//Factory functions
function criaPessoa(name, surname, age) {
  return {
    name,
    surname,
    age,
    nomeCompleto() {
        return `${this.name} ${this.surname}`
    }
  };
}

const p1 = criaPessoa("Carlos", "Eduardo", 19);
console.log(p1.nomeCompleto());

//Constructor functions
function Pessoa(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
};
//A palavra (new) vai criar um objeto vazio e atrelhar o (this) dentro dessa função
const p2 = new Pessoa("Carlos", "Eduardo", 19);
console.log(p2)

//Classes
