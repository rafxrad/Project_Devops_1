import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  margin: 0;
`;

export const Item = styled.div`
  display: flex;
  margin: 0;
  justify-content: space-between;
  width: 11rem;
  height: 2rem;
  background-color: #ffe500;
  position: relative;
  transform: rotate(45deg);
  top: 16rem;
  right: 12.5rem;
`;

export const Triangulo1 = styled.div`
  width: 0;
  height: 0;
  position: relative;
  right: 13px;
  transform: rotate(90deg);
  border-left: 25px solid transparent; /* Lado esquerdo transparente */
  border-right: 25px solid transparent; /* Lado direito transparente */
  border-bottom: 25px solid #fff; /* Base vermelha (altere a cor conforme necessário) */
`;

export const Triangulo2 = styled.div`
  width: 0;
  height: 0;
  position: relative;
  left: 13px;
  transform: rotate(270deg);
  border-left: 25px solid transparent; /* Lado esquerdo transparente */
  border-right: 25px solid transparent; /* Lado direito transparente */
  border-bottom: 25px solid #fff; /* Base vermelha (altere a cor conforme necessário) */
`;
