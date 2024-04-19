import styled from "styled-components";

const Container = styled.div`
  font-family: Lobster, cursive;
  width: 28rem;
  height: 35rem;
  background-color: #f3ffab;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #a8b700;
`;

const AreaAdd = styled.div`
  width: 24rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AreaInfo = styled.div`
  margin-top: 3rem;
`;

const Input = styled.input`
  width: 16rem;
  background-color: #f3ffab;
  border: none;
  border-bottom: 1px dashed #a8b700;
  color: black;
  opacity: 0.5;
  font-family: Lobster, cursive;
`;

const Button = styled.button`
  background-color: #a8b700;
  border: none;
  margin-left: 0.5rem;
  width: 6rem;
  height: 1.5rem;
  cursor: pointer;
`;

const TextButton = styled.span`
  font-family: Lobster, cursive;
  color: #fff;
`;

const AreaTitleInfo = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 23vw;
`;

const LineTitle = styled.div`
  border-left: 1px dashed #a8b700;
  margin: 0 0.7rem;
  height: 2vh;
`;

const TitleInfo = styled.span`
  color: #a8b700;
`;

const Tasks = styled.ul`
  width: 23vw;
  height: 40vh;
  overflow: auto;
  margin: 0;
  padding: 0;
`;

const NothinTask = styled.div`
  color: #a8b700;
  font-size: 1.3rem;
  width: 23vw;
  display: flex;
  justify-content: center;
  margin-top: 6vh;
`;
export {
  Title,
  Container,
  AreaAdd,
  AreaInfo,
  Input,
  Button,
  TextButton,
  AreaTitleInfo,
  TitleInfo,
  LineTitle,
  Tasks,
  NothinTask,
};
