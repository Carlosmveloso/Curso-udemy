//* Funções construtora
//* Já faz muita coisa automaticamente para você
//* SEMPRE  precisa iniciar com letra maiúscula -> Exemplo: (new) Pessoa

function Pessoa(nome, sobrenome) {
  //Atributos ou métodos secretos, não sendo acessado por notação de ponto
  const ID = 123;
  const metodoSecreto = () => {};
  
  //Atributos ou métodos públicos, sendo acessado por notação de ponto
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.fala = () => {
    console.log(
      `Oi, eu sou ${this.nome} ${this.sobrenome} e eu estou falando.`,
    );
  };
}
// A palavra (new) cria um novo objeto vazio e já se referência para a função construtora dela e já retorna o valor para a variável.
const p1 = new Pessoa("Carlos", "Eduardo");
console.log(p1);
p1.fala();

const p2 = new Pessoa("Rachel", "Marques");
console.log(p2);
p2.fala();
