//* Tratando e Lançando erros (Try, catch, throw)

// const certo = 'Agora foi'

// try {
//     console.log(teste);
// } catch (error) {
//     console.log(certo)
// }

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    // Isso é uma classe de erro
    throw new Error("Ambos os número precisam ser números");
  }
  return x + y;
}

try {
    console.log(soma(10, 5));
     console.log(soma('10', 5));
} catch (error) {
    // console.log(error)
    console.log('Alguma coisa de errado')
}
