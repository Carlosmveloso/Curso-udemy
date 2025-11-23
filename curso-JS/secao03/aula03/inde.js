/*
Valores que vão retornar false:
false
0
string vazia
null/undefined
NaN
*/

//Avaliacao de curto-circuito com (&&)

function falarOi() {
  return `Oi`;
}

const executarFala = true;

console.log(executarFala && falarOi());

//Avaliacao de curto-circuito com (||)

console.log(0 || false || null || `Luiz Otávio` || true);
//Ele só precisa de uma expressão verdadeira, e mostra a primeira expressão verdadeira, por isso não executou o true.
