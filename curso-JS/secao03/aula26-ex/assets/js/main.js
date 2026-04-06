function taskList() {
  const newTask = document.querySelector(".input-new-task");
  const addTask = document.querySelector(".btn-add-task");
  const taskList = document.querySelector(".task-list");

  addTask.addEventListener("click", function () {
    //* Como o professor fez
    //* Quando se coloca o retunr ele encerra o processo do código
    if (!newTask.value) return;
    createTask(newTask.value);
  });

  function createLi() {
    const li = document.createElement("li");
    return li;
  }

  newTask.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      if (!newTask.value) return;
      createTask(newTask.value);
    }
  });

  function createTask(textInput) {
    const li = createLi();
    li.innerHTML = textInput;
    taskList.appendChild(li);
    resetInputNewTask();
    btnDeleteTask(li);
  }

  function resetInputNewTask() {
    newTask.value = "";
    newTask.focus();
    //Focus() faz com que depois de alguma ação deixe o cursor em foco em alguma parte do site, no nosso exemplo foi no input para adicionar uma nova tarefa.
  }

  function btnDeleteTask(li) {
    li.innerText += " ";
    const button = document.createElement("button");
    button.innerText = "Apagar";
    li.appendChild(button);
    //Atribuir um atributo a um elemento
    button.setAttribute("class", "apagar");
    //                   tipo      nome
  }

  //Delete task
  document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("apagar")) {
      el.parentElement.remove();
    }
  });

  //Save tasks in local storage
  function saveTasks() {
    const liTasks = taskList.querySelectorAll("li");
    const listOfTasks = [];

    for (let task of liTasks) {
      
    }
  }
}

taskList();
