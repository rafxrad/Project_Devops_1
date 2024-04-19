import {
  CreateTask,
  DeleteTask,
  SelectTask,
  ShowTask,
  UpdateTasks,
} from "../Services/taskService.js";
export const insertTask = async (req, res) => {
  let data = req.body;
  if (!data.title) {
    return res.json({ Error: "título não informado!" });
  }
  const result = await CreateTask(data);
  if (result) {
    return res.status(201).json({ message: "Tarefa criada com sucesso!" });
  }
  return res.status(500).json({ Error: "Tarefa não foi criada!" });
};

export const showTasks = async (req, res) => {
  const tasks = await ShowTask();
  return res.json(tasks);
};

export const showTask = async (req, res) => {
  let { key } = await req.body;
  const result = await SelectTask(key);
  if (result) {
    return res.json(result);
  }
  return res.json({ error: "Tarefa não encontrada!" });
};

export const updateTask = async (req, res) => {
  let { key, title, done } = await req.body;
  const result = await UpdateTasks(key, { title, done });
  if (result) {
    return res.json({ message: "Tarefa editada com sucesso!" });
  }
  return res.json({ error: "Erro ao editar tarefa!" });
};

export const deleteTask = async (req, res) => {
  let { key } = await req.body;
  const result = await DeleteTask(key);
  if (result) {
    return res.json({ message: "Tafera deletada com sucesso!" });
  }
  res.json({ error: "Erro ao deletar tarefa!" });
};
