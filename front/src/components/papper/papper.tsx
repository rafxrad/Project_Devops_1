import * as C from "./styledPapper";
import Tape from "../decoration/tape1/tape";
import Tape2 from "../decoration/tape2/tape2";
import Task from "../Task/task";
import { TaskType } from "../Task/tasktype";
import { useState } from "react";
import EditTask from "../EditTask/EditTask";
type Props = {
  ListTasks: TaskType[];
  sendTask: (task: TaskType) => void;
  sendKeyTask: (task: TaskType) => void;
  sendUpdateTask: (task: TaskType, confirm: boolean) => void;
  sendDoneTask: (task: TaskType) => void;
};

const Papper: React.FC<Props> = ({
  ListTasks,
  sendTask,
  sendKeyTask,
  sendUpdateTask,
  sendDoneTask,
}) => {
  const [inputTask, setInputTask] = useState<string>("");

  const HandleSendTask = () => {
    if (inputTask.split(" ").join("") !== "") {
      sendTask({ title: inputTask, done: 0 });
      setInputTask("");
    } else {
      setInputTask("");
    }
  };

  return (
    <>
      <Tape></Tape>
      <Tape2></Tape2>
      <C.Container>
        <C.Title>Todo List</C.Title>
        <C.AreaAdd>
          <C.Input
            value={inputTask}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputTask(e.target.value);
            }}
            placeholder="Type it your task here"
          ></C.Input>
          <C.Button
            onClick={() => {
              HandleSendTask();
            }}
          >
            <C.TextButton>To add</C.TextButton>
          </C.Button>
        </C.AreaAdd>
        {ListTasks.length > 0 ? (
          <C.AreaInfo>
            <C.AreaTitleInfo>
              <C.TitleInfo>Done</C.TitleInfo>
              <C.LineTitle></C.LineTitle>
              <C.TitleInfo>Edit</C.TitleInfo>
              <C.LineTitle></C.LineTitle>
              <C.TitleInfo>Delete</C.TitleInfo>
            </C.AreaTitleInfo>

            <C.Tasks>
              {ListTasks.map((item) => {
                return (
                  <Task
                    sendDoneTask={sendDoneTask}
                    key={item.key}
                    sendUpdateTask={(data: TaskType, confirm: boolean) => {
                      sendUpdateTask(data, confirm);
                    }}
                    sendKeyTask={(e: TaskType) => {
                      sendKeyTask(e);
                    }}
                    data={item}
                  ></Task>
                );
              })}
            </C.Tasks>
          </C.AreaInfo>
        ) : (
          <C.NothinTask>Add some task!</C.NothinTask>
        )}
      </C.Container>
    </>
  );
};

export default Papper;
