const {
  CreateTask,
  DeleteTask,
  SelectTask,
  ShowTask,
  UpdateTasks,
} = require("../Services/taskService.js");

async function insertTask(req, res) {
  let data = req.body;
  if (!data.title) {
    return res.status(400).json({ Error: "título não informado!" });
  }
  const result = await CreateTask(data);
  if (result) {
    return res.status(201).json({ message: "Tarefa criada com sucesso!" });
  }
  return res.status(500).json({ Error: "Tarefa não foi criada!" });
}

async function showTasks(req, res) {
  const tasks = await ShowTask();
  return res.json(tasks);
}

async function showTask(req, res) {
  let { key } = req.body;
  const result = await SelectTask(key);
  if (result) {
    return res.json(result);
  }
  return res.json({ error: "Tarefa não encontrada!" });
}

async function updateTask(req, res) {
  let { key, title, done } = req.body;
  const result = await UpdateTasks(key, { title, done });
  if (result) {
    return res.json({ message: "Tarefa editada com sucesso!" });
  }
  return res.json({ error: "Erro ao editar tarefa!" });
}

async function deleteTask(req, res) {
  let { key } = req.body;
  const result = await DeleteTask(key);
  if (result) {
    return res.json({ message: "Tarefa deletada com sucesso!" });
  }
  return res.json({ error: "Erro ao deletar tarefa!" });
}

module.exports = {
  insertTask,
  showTasks,
  showTask,
  updateTask,
  deleteTask,
};
