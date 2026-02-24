//* setInterval e setTimeout

function mostrarHora() {
  let data = new Date();

  return data.toLocaleTimeString(`pt-BR`, {
    hour12: false,
  });
}

// function exibirHora() {
//   console.log(mostrarHora());
// }
// //* define um tempo entre uma execução e outra
// setInterval(exibirHora, 1000);

// Pode ser feito dessa maneira

const timer = setInterval(function () {
  console.log(mostrarHora());
}, 1000);

//* define um tempo para finalizar a execução do comando

setTimeout(function () {
  clearInterval(timer);
}, 5000);
