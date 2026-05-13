//* Funções Fábrica (Factory Functions)

function criaPessoa(nome, sobrenome, idade, altura, peso) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${nome} ${sobrenome}`
        },
        idade,
        fala: function(assunto) {
            return `${this.nome} está falando sobre ${assunto}`
        },
        altura,
        peso,
        //Isso é o mesmo método que o de cima, porém, simplificado

        //* GETTER -> meio que transforma em um atributo do objeto
        get imc() {
          const valorIMC = this.peso / (this.altura ** 2);
          return valorIMC.toFixed(2);
        }
        //Como FALA é um método de NOME e SOBRENOME, quando usamos o THIS, ele se refere a pessoa que chamou esse método ou função. Nesse caso NOME 
    }
};

//Quando uma função está dentro de um objeto é chamado de MÉTODO

//*Por que criar um método dentro de um objeto ?


const p1 = criaPessoa('Carlos', "Eduardo", 19, 1.75, 65);
const p2 = criaPessoa('Rachel', 'Marques', 50, 1.60, 55);

console.log(p1.nomeCompleto());
console.log(p1.fala('programação'));
console.log(p1.imc);

console.log(p2.nomeCompleto());
console.log(p2.fala('imóveis'));
console.log(p2.imc);