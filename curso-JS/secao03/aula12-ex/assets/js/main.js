const elementos = [
  //Índice 0
  { tag: "h2", texto: "Frase 1" },
  //Índice 1
  { tag: "h3", texto: "Frase 2" },
  //Índice 2
  { tag: "h4", texto: "Frase 3" },
  //Índice 3
  { tag: "h5", texto: "Frase 4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerHTML = texto;
  div.appendChild(tagCriada);
}

container.appendChild(div)
