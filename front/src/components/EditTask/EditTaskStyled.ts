import styled from "styled-components";

const Dark = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: black;
  opacity: 0.3;
  z-index: 3;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  position: absolute;
  z-index: 4;
`;

const WindowEdit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 28vw;
  height: 15vh;
  background-color: #f3ffab;
  position: relative;
  z-index: 5;
  border-radius: 15px;
`;

const HeaderArea = styled.div`
  display: flex;

  width: 30vw;
  justify-content: space-between;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
  color: #a8b700;
`;

const AreaEdit = styled.form`
  margin-top: 1vw;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px dashed #a8b700;
  background: none;
  width: 17vw;
`;

const Button = styled.button`
  background-color: #a8b700;
  font-family: Lobster, cursive;
  font-size: 0.9rem;
  color: White;
  border: none;
  margin-left: 0.5rem;
  width: 6rem;
  height: 1.5rem;
  cursor: pointer;
`;

const Close = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 2.5rem;
  height: 5vh;
  cursor: pointer;
  position: relative;
  bottom: 15px;
  border-radius: 100%;
  border: none;
  background-color: red;
  z-index: 5;
`;

const Line1Close = styled.div`
  margin: 0;
  border: 1.5px solid white;
  width: 2vw;
  transform: rotate(45deg);
`;

const Line2Close = styled.div`
  margin: 0;
  border: 1.5px solid white;
  width: 2vw;
  transform: rotate(-45deg);
`;

export {
  Container,
  WindowEdit,
  Dark,
  Title,
  AreaEdit,
  Input,
  Button,
  Close,
  HeaderArea,
  Line1Close,
  Line2Close,
};
