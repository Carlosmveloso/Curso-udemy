const nome = 'Carlos Eduardo';
const sobrenome = 'Marques';
const idade = 19;
const peso = 66;
const alturaEmMetros = 1.76;
let imc = peso / (alturaEmMetros * alturaEmMetros);
let anoDeNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade}, pesa ${peso}Kg`);
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoDeNascimento}`);