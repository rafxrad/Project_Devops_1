import styled from "styled-components";

const Task = styled.li`
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom: 1px dashed #a8b700;
`;

const TitleTask = styled.div`
  color: black;
  width: 13vw;
  //background-color: pink;
  overflow: auto;
`;

const Options = styled.div`
  margin: 0;
  width: 9rem;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: none;
  border: none;
`;
export { Task, TitleTask, Options, Button };
