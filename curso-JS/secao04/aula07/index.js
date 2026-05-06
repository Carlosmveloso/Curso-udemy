//* Funções imediatas -> IIEF -> Immediately invoked function expression
(function(idade, peso, altura) {

  const sobrenome = 'Eduardo';
  function criaNome(nome) {
    return `${nome} ${sobrenome}`
  }

  function falaNome() {
    console.log(criaNome('Carlos'))
  }

  falaNome()
  console.log(idade, peso, altura)

})(19, 65, 1.75);
