//* Praticando factory functions
//* Fazendo uma calculadora

function criarCalculadora() {
  return {
    //Por questão de organização os atributos devem ficar em cima e os métodos em baixo
    display: document.querySelector(".display"),
    btnEqual: document.querySelector("btn-clear"),

    inicia() {
      this.cliqueBotoes();
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        //Uma arrow function n troca o .this, ele mantém o mesmo do pai
        const element = e.target;

        if (element.classList.contains("btn-num")) {
          this.btnParaDisplay(element.innerText);
        }

        if (element.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (element.classList.contains("btn-del")) {
          this.deleteLastNumber();
        }

        if(element.classList.contains('btn-eq')) {
            this.makeCount();
        }
      });
    },

    makeCount() {
      let count = this.display.value;

      try {
        count = eval(count);
        if (!count) {
          alert("Conta inválida");
          return;
        }
        this.display.value = String(count);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteLastNumber() {
      this.display.value = this.display.value.slice(0, -1);
    },
  };
}

const calculadora = criarCalculadora();
calculadora.inicia();
