const { criarTarefa, removerTarefa, marcarTarefaCompleta, listarTarefa } = require('./gerenciador-de-tarefas');

test('deve criar uma tarefa', function () {

    var { criarTarefa, removerTarefa, marcarTarefaCompleta, listarTarefa } = require('./gerenciador-de-tarefas');
    var tarefa = criarTarefa('tarefa 01', 'descrição da tarefa 01');

    expect(tarefa.title).toBe('tarefa 01');
    expect(tarefa.description).toBe('descrição da tarefa 01');
    expect(tarefa.completed).toBe(false);

})

test('deve verificar se o titulo da tarefa esta vazio', function () {

    var tarefa = criarTarefa('', 'descrição da tarefa 01');

    expect(tarefa).toBe(null);
})


test('deve remover uma tarefa', function () {

    var tarefa = criarTarefa('remover tafera', 'descrição da tarefa 01');

    removerTarefa(tarefa.id);

    var tarefa = listarTarefa();

    expect(tarefa).not.toContain(tarefa);
})


test('deve marcar uma tarefa como concluída', function () {

    var tarefa = criarTarefa('marcar tarefa como concluída', 'descrição da tarefa 01');

    marcarTarefaCompleta(tarefa.id);

    expect(tarefa.completed).toBe(true);

})

test('deve listar as tarefas', function () {

    var tarefa = criarTarefa('marcar tarefa como concluída', 'descrição da tarefa 01');
    var tarefa = listarTarefa();

    expect(tarefa).toContain(tarefa);
})