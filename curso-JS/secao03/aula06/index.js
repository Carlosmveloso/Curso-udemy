//* Objeto Date

//Diferentes formas de usar o Date().

const data = new Date();// Pega a data e hora que o dispositivo está registrando.
console.log(data.toString());

const data1 = new Date(2005, 0, 15);// Ano, Mês, Dia, Hora, Minuto, Segundo, Milésimo de segundo
console.log(data1.toString());

const data2 = new Date('2006-07-17'); //Data em formato americano.
console.log(data2.toString());

//Para pegar apenas o dia de uma data inteira
console.log(`Dia: ${data.getDate()}`);

//Para pegar apenas o mês de uma data inteira
console.log(`Mês: ${data.getMonth()}`); // Mês começa do 0

//Para pegar apenas o ano de uma data inteira
console.log(`Ano: ${data.getFullYear()}`);

//Para pegar apenas a hora de uma data inteira
console.log(`Hora: ${data.getHours()}`);

//Para pegar apenas os minutos de uma data inteira
console.log(`Minutos: ${data.getMinutes()}`);

//Para pegar apenas os segundos de uma data inteira
console.log(`Segundos: ${data.getSeconds()}`);

//Para pegar apenas os milesegundod de uma data inteira
console.log(`Milesegundos: ${data.getMilliseconds()}`);

//Para pegar apenas o dia da semanda de uma data inteira
console.log(`Dia da semana: ${data.getDay()}`);// 0 = Domingo, 6 = sábado


const dataEmMs = Date.now();
const data3 = new Date(dataEmMs);
console.log(data3.toString());





