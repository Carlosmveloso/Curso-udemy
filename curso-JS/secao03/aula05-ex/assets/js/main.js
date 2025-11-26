const calcular = document.getElementById("calcular");
calcular.addEventListener("click", calcularImc);

function calcularImc(evento) {
  evento.preventDefault();
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const resultado = document.getElementById("resultado");

  if (peso === "" || altura === "") {
    resultado.innerHTML = `Faltando campos para preencher`;
    resultado.style.padding = "5px";
    resultado.style.backgroundColor = "red";
    resultado.style.borderRadius = "5px";
  }

  const pesoNum = Number(peso);
  const alturaNum = Number(altura);
  const resultadoImc = pesoNum / alturaNum ** 2;
  const rArredondado = resultadoImc.toFixed(1);

  if (rArredondado > 0 && rArredondado < 18.5) {
    resultado.innerHTML = `Abaixo do peso`;
    resultado.style.backgroundColor = "#83C635";
  } else if (rArredondado >= 18.5 && rArredondado <= 24.9) {
    resultado.innerHTML = `Peso normal`;
    resultado.style.backgroundColor = "#C0D90B";
  } else if (rArredondado > 24.9 && rArredondado <= 29.9) {
    resultado.innerHTML = `Sobrepeso`;
    resultado.style.backgroundColor = "#FCA500";
  } else if (rArredondado >= 30 && rArredondado <= 34.9) {
    resultado.innerHTML = `Obesidade grau 1`;
    resultado.style.backgroundColor = "#F67600";
  } else if (rArredondado >= 35 && rArredondado <= 39.9) {
    resultado.innerHTML = `Obesidade grau 2`;
    resultado.style.backgroundColor = "#fc5800ff";
  } else if (rArredondado >= 40 && rArredondado < 185) {
    resultado.innerHTML = `Obesidade grau 3`;
    resultado.style.backgroundColor = "#fc3700ff";
  } else {
    resultado.innerHTML = `Número não válido`;
    resultado.style.backgroundColor = "#f5f5f5";
  }
  console.log(rArredondado)
};