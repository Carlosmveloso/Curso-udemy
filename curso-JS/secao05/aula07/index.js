//* Como unir Filter + Map + Reduce

//Retorne a soma do sobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filtro = numeros
  .filter((numero) => {
    if (numero % 2 === 0) {
      return numero;
    }
  })
  .map((numero) => {
    return numero * 2;
  })
  .reduce((numeroInicial, numero) => {
    return (numeroInicial += numero);
  }, 0);

  console.log(filtro)