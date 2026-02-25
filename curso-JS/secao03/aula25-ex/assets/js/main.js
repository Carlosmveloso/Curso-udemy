//* Deixar tudo dentro de uma função, para que nada fique no escopo global

function clock() {
  const time = document.querySelector(".relogio");
  const start = document.querySelector(".iniciar");
  const pause = document.querySelector(".pausar");
  const reset = document.querySelector(".zerar");
  let segundos = 0;
  let timer;

  function formartedSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  function startTime() {
    timer = setInterval(function () {
      segundos++;
      time.innerHTML = formartedSeconds(segundos);
    }, 1000);
  }

  // start.addEventListener("click", startTimer);
  // function startTimer(event) {
  //   clearInterval(timer);
  //   startTime();
  //   start.disabled = true;
  //   start.innerHTML = "Iniciado";
  //   pause.disabled = false;
  //   pause.innerHTML = "Pausar";
  // }

  // pause.addEventListener("click", pauseTimer);
  // function pauseTimer(event) {
  //   clearInterval(timer);
  //   start.disabled = false;
  //   pause.disabled = true;
  //   pause.innerHTML = "Pausado";
  //   start.innerHTML = "Continuar";
  // }

  // reset.addEventListener("click", resetTimer);
  // function resetTimer(event) {
  //   clearInterval(timer);
  //   time.innerHTML = "00:00:00";
  //   pause.disabled = false;
  //   start.disabled = false;
  //   start.innerHTML = "Iniciar";
  //   pause.innerHTML = "Pausar";
  //   segundos = 0;
  // }

  //* Esses 3 eventos de click pode ser reduzido a apenas 1 dessa maneira melhorando a performance do código.

  document.addEventListener("click", function (e) {
    const element = e.target;

    if (element.classList.contains("iniciar")) {
      clearInterval(timer);
      startTime();
      start.disabled = true;
      start.innerHTML = "Iniciado";
      pause.disabled = false;
      pause.innerHTML = "Pausar";
    }

    if (element.classList.contains("pausar")) {
      clearInterval(timer);
      start.disabled = false;
      pause.disabled = true;
      pause.innerHTML = "Pausado";
      start.innerHTML = "Continuar";
    }

    if (element.classList.contains("zerar")) {
      clearInterval(timer);
      time.innerHTML = "00:00:00";
      pause.disabled = false;
      start.disabled = false;
      start.innerHTML = "Iniciar";
      pause.innerHTML = "Pausar";
      segundos = 0;
    }
  });
}
clock();
