//Evitar envio padrão do formulário
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inpPeso = event.target.querySelector("#peso");
  const inpAltura = event.target.querySelector("#altura");

  const peso = Number(inpPeso.value);
  const altura = Number(inpAltura.value);
  //Verificando se o peso ou altura são números válidos
  if (!peso || !altura) {
    printarResultado("Peso ou altura estão inválidos", false);
    return;
  }
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;
  printarResultado(msg, true);
});

//Printar na tela a mensagem
function printarResultado(msg, isValid) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  const p = criaP();
  if (isValid) {
    p.classList.add("resultado-bom");
  } else {
    p.classList.add("resultado-ruim");
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
}

//Cria um tag p para o html
function criaP() {
  const p = document.createElement("p");
  return p;
}

//Calculo de imc
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

//Vendo em nível de imc a pessoa está
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  //Quando a condição é pequena pode colocar dessa forma...
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];

  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if (imc < 18.5) {
    return nivel[0];
  }
}
