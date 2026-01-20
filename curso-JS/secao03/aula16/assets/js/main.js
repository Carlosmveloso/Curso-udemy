const paragrafo = document.querySelector('.paragrafos');
const ps = paragrafo.querySelectorAll('p');

// Pega todos os estilos do body, usanso essa função que já existe
const estilosBody = getComputedStyle(document.body);
const bgColorBody = estilosBody.backgroundColor;

console.log(bgColorBody);

for (let p of ps) {
    p.style.backgroundColor = bgColorBody;
    p.style.color = 'white';
}

