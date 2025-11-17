const enviar = document.getElementById("form");
enviar.addEventListener("submit", enviarForm);

const pessoas = [];

function enviarForm(evento) {
  evento.preventDefault();
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let idade = document.getElementById("idade").value;
  let peso = document.getElementById("peso").value;
  let resultado = document.getElementById('resultado');

  resultado.innerHTML += `O nome é: ${nome} ${sobrenome} com a idade ${idade} anos e pesa de ${peso} Kg. <br> <br>`

  let pessoa = {
    Nome: `${nome}`,
    Sobrenome: `${sobrenome}`,
    Idade: `${idade}`,
    Peso: `${peso}`
  }
  pessoas.push(pessoa);
  console.log(pessoas);

}
