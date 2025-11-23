const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

const num = Number(prompt('Digite um número: '));

numeroTitulo.innerHTML = num;
texto.innerHTML = `<p> Raiz quadrada: ${Math.sqrt(num)}</p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p> Com duas casa decimais: ${num.toFixed(2)}`;