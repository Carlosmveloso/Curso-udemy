//* Praticando constructor functions
//* Fazendo uma calculadora com funções construtoras dessa vez

function Calculadora() {
  //Atributos
  this.display = document.querySelector(".display");

  //Métodos
  this.inicia = () => {
    this.cliqueBotoes();
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const element = e.target;
      console.log(element);

      if (element.classList.contains("btn-num")) {
        this.btnParaDisplay(element.innerText);
      }

      if (element.classList.contains("btn-clear")) {
        this.clearDisplay();
      }

      if (element.classList.contains("btn-del")) {
        this.deleteLastNumber();
      };

      if (element.classList.contains('btn-eq')) {
        this.count();
      }
    });
  };

  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.deleteLastNumber = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.count = () => {
    let count = this.display.value;

    try {
        count = eval(count);

        if(!count) {
            alert('Conta inválida');
            return;
        };

        this.display.value = String(count);
    } catch (error) {
        alert('Conta inválida');
        return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
