let tasks = [];
let idCounter = 0;

function criarTarefa(title, description) {
    if (title.trim() === '') {
        return null;
    }
    const task = {
        id: idCounter++,
        title: title,
        description: description,
        completed: false
    };
    tasks.push(task);
    return task;
}

function removerTarefa(id) {
    tasks = tasks.filter(task => task.id !== id);
}

function marcarTarefaCompleta(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
    }
}

function listarTarefa() {
    return tasks;
}

module.exports = {
  criarTarefa,
  removerTarefa,
  marcarTarefaCompleta,
  listarTarefa
};