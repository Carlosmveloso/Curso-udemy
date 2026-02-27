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
  }

  function resetInputNewTask() {
    newTask.value = "";
    newTask.focus();
    //Focus() faz com que depois de alguma ação deixe o cursor em foco em alguma parte do site, no nosso exemplo foi no input para adicionar uma nova tarefa.
  }
}

taskList();
