//* Declaração de função

function falarOi() {
    console.log('Oi');
};

falarOi();

//* First-class objects
//* Function expression
// A função pode ser salva dentro de uma variável
const dado = function() {
    console.log('Sou um dado');
};
dado();

//* Arrow function
const arrowFunction = () => {
    console.log('Eu sou uma arrow function!');
}
arrowFunction(); 