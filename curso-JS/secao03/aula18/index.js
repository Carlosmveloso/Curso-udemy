//* Break e Continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
  if (numero === 2) {
    console.log(`Achei o número 2`);
    continue; // Encontra o 2 e pula ele, mandando continuar a repetição
  }

  if (numero === 5) {
    console.log(`Achei o número 5, o resto não vai ser exibido`);
    break;// Quando encontrar o 5 para a execução da repetição
  }

  console.log(numero);
}
