//* Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver sob modo paissagem.

function ePaissagem (largura, altura) {
    return largura > altura ? true : false;
}

const largura = 1920;
const altura = 1080;

console.log(ePaissagem(largura, altura));

//Pode ser feita dessa maneira

const ePaisagem = (largura, altura) => {
    return largura > altura ? true : false;
}   

console.log(ePaisagem(largura, altura));