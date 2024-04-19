import * as C from "./styleTask";
import DoneIcon from "./../../../public/Done-Icon.png";
import EditIcon from "./../../../public/Edit-Icon.png";
import DeleteIcon from "./../../../public/trash-Icon.png";
import { TaskType } from "./tasktype";
import { useState } from "react";
type TaskProps = {
  data: TaskType;
  sendKeyTask: (task: TaskType) => void;
  sendUpdateTask: (task: TaskType, condition: boolean) => void;
  sendDoneTask: (task: TaskType) => void;
};
const Task: React.FC<TaskProps> = ({
  data,
  sendKeyTask,
  sendUpdateTask,
  sendDoneTask,
}) => {
  const [renderAs, setRenderAs] = useState<boolean>(false);
  const renderA = (value: boolean) => {
    setRenderAs(value);
  };

  return (
    <C.Task key={data?.key}>
      {data.done ? (
        <C.TitleTask
          style={{ textDecoration: "line-through", color: "#00ff00" }}
        >
          {data.title ? data.title : "Nothing"}
        </C.TitleTask>
      ) : (
        <C.TitleTask>{data.title ? data.title : "Nothing"}</C.TitleTask>
      )}

      <C.Options>
        {data.done ? (
          <C.Button
            onClick={() => {
              sendDoneTask({ key: data.key, title: data.title, done: 0 });
            }}
          >
            <img style={{ cursor: "pointer" }} src={DoneIcon}></img>
          </C.Button>
        ) : (
          <C.Button
            onClick={() => {
              sendDoneTask({ key: data.key, title: data.title, done: 1 });
            }}
            onMouseOver={() => renderA(true)}
            onMouseOut={() => renderA(false)}
          >
            {renderAs ? (
              <img style={{ cursor: "pointer" }} src={DoneIcon}></img>
            ) : (
              <div style={{ width: "1.5rem", height: "1rem" }}></div>
            )}
          </C.Button>
        )}
        <C.Button
          onClick={() => {
            sendUpdateTask(data, true);
          }}
        >
          <img style={{ cursor: "pointer" }} src={EditIcon}></img>
        </C.Button>

        <C.Button
          onClick={() => {
            sendKeyTask(data);
          }}
        >
          <img
            style={{ margin: "0 0.9rem 0 0", cursor: "pointer" }}
            src={DeleteIcon}
          ></img>
        </C.Button>
      </C.Options>
    </C.Task>
  );
};

export default Task;
