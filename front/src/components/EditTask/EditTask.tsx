import * as C from "./EditTaskStyled";
import { TaskType } from "../Task/tasktype";
import { useState } from "react";
type Props = {
  Data: TaskType;
  sendUpdateTask: (task: TaskType) => void;
  confirmCloseWindow: (confirmClose: boolean) => void;
};
const EditTask: React.FC<Props> = ({
  Data,
  sendUpdateTask,
  confirmCloseWindow,
}) => {
  const [inputTask, setInputTask] = useState<string>(Data.title);
  return (
    <>
      <C.Dark></C.Dark>
      <C.Container>
        <C.WindowEdit>
          <C.HeaderArea>
            <div style={{ width: "3vw" }}></div>
            <C.Title>Edit Task</C.Title>
            <C.Close
              onClick={() => {
                confirmCloseWindow(false);
              }}
            >
              <div>
                <C.Line2Close></C.Line2Close>
                <C.Line1Close></C.Line1Close>
              </div>
            </C.Close>
          </C.HeaderArea>

          <C.AreaEdit
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <C.Input
              placeholder="Old Task"
              value={inputTask}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputTask(e.target.value);
              }}
            ></C.Input>
            <C.Button
              onClick={() => {
                if (inputTask.split(" ").join("") !== "") {
                  sendUpdateTask({
                    key: Data.key,
                    title: inputTask,
                    done: Data.done,
                  });
                  confirmCloseWindow(false);
                } else {
                  alert("Type it a task!");
                }
              }}
            >
              Edit
            </C.Button>
          </C.AreaEdit>
        </C.WindowEdit>
      </C.Container>
    </>
  );
};

export default EditTask;
