//* FOR OF 

//Usando for normal
const nomes = ['Carlos', 'Rachel', 'Veloso'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
};

//Usando for in
for (let i in nomes ) {
    console.log(nomes[i]);
};

//* Usando for of
//* O for of já mostra o VALOR e não o índice
for (let i of nomes) {
    console.log(i);
};

//* FOR clássico - Geralmente com interáveis (Arrays ou Strings)
//* FOR IN - Retorna o índice ou chave (Arrays, Strings ou Objetos)
//* FOR OF - Retorna o valor em si (Iteráveis, Arrays ou Strings)

