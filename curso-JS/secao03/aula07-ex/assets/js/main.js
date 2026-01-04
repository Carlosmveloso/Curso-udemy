const resposta = document.querySelector("h1");
const date = new Date();
const dayOfWeek = date.getDay();
let dayOfWeekText;

switch (dayOfWeek) {
  case 0:
    dayOfWeekText = "Domingo";
    break;
  case 1:
    dayOfWeekText = "Segunda-Feira";
    break;
  case 2:
    dayOfWeekText = "Terça-Feira";
    break;
  case 3:
    dayOfWeekText = "Quarta-Feira";
    break;
  case 4:
    dayOfWeekText = "Quinta-Feira";
    break;
  case 5:
    dayOfWeekText = "Sexta-Feira";
    break;
  case 6:
    dayOfWeekText = "Sábado";
    break;
  default:
    dayOfWeekText = "Dia inválido";
}

const month = date.getMonth();
let monthText;

switch (month) {
  case 0:
    monthText = "Janeiro";
    break;
  case 1:
    monthText = "Fevereiro";
    break;
  case 2:
    monthText = "Março";
    break;
  case 3:
    monthText = "Abril";
    break;
  case 4:
    monthText = "Maio";
    break;
  case 5:
    monthText = "Junho";
    break;
  case 6:
    monthText = "Julho";
    break;
  case 7:
    monthText = "Agosto";
    break;
  case 8:
    monthText = "Setembro";
    break;
  case 9:
    monthText = "Outubro";
    break;
  case 10:
    monthText = "Novembro";
    break;
  case 11:
    monthText = "Dezembro";
    break;
}

const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const year = date.getFullYear();

resposta.innerHTML = `${dayOfWeekText}, ${day} de ${monthText} de <br> <br> ${year} e são ${hour}:${minutes}`;