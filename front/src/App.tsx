import Papper from "./components/papper/papper";
import { TaskType } from "./components/Task/tasktype";
import EditTask from "./components/EditTask/EditTask";
import api from "./axios/api";
import { useEffect, useState } from "react";
function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [windowUpdate, setWindowUpdate] = useState<boolean>(false);
  const [selectTaskUpdate, setSelectTaskUpdate] = useState<TaskType>();
  const getTasks = async () => {
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addTask = async (task: TaskType) => {
    try {
      await api.post("/task", task).then(() => {
        alert("Tarefa inserida com sucesso");
        getTasks();
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = async (task: TaskType) => {
    const { key } = task;
    const obj = {
      key,
    };
    try {
      await api.post("/delete/task", obj).then(() => {
        alert("tarefa deletada com sucesso!");
        getTasks();
      });
    } catch (error) {
      console.log(error);
    }
  };
  const updateTask = async (task: TaskType) => {
    const { key, title, done } = task;
    const obj = { key, title, done };
    try {
      await api.put("/task", obj).then(() => {
        getTasks();
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {windowUpdate ? (
        <EditTask
          sendUpdateTask={(data: TaskType) => {
            updateTask(data);
          }}
          Data={selectTaskUpdate}
          confirmCloseWindow={(confirm: boolean) => {
            setWindowUpdate(confirm);
          }}
        ></EditTask>
      ) : null}
      <Papper
        sendDoneTask={(data: TaskType) => {
          updateTask(data);
        }}
        sendUpdateTask={(data: TaskType, condition: boolean) => {
          setSelectTaskUpdate(data);
          setWindowUpdate(condition);
        }}
        sendKeyTask={(e: TaskType) => {
          deleteTask(e);
        }}
        sendTask={addTask}
        ListTasks={tasks}
      ></Papper>
    </div>
  );
}

export default App;
