//* Estrutura de repetição (FOR)

//    criar variável ; onde vai parar; ação
for (let contador = 0; contador <= 5; contador++) {
    console.log(`Contador ${contador}`);
};

//Saber se um número é par ou ímpar usando for 
for (let num = 0; num <= 5; num++) {
    const par = num % 2 === 0;
    console.log(num, par)
};


//Percorrer um arrau usando FOR
const frutas = ["Maça", "Pera", "Banana"];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}: ${frutas[i]}`);
}