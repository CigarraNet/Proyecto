import styled from "styled-components";
import { Icono, variables } from "../../index";

export function ListaMenuDesplegable({ data, top, funcion }) {
  return (
    <Container top={top}>
      {data.map((item, index) => {
        return (
          <ItemsDesplegable key={index} onClick={() => funcion(item)}>
            <Icono>{item.icono}</Icono>
            <span>{item.text}</span>
          </ItemsDesplegable>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({ theme }) => theme.bg3};
  border-radius: 22px;
  top: ${(props) => props.top};
  box-shadow: ${() => variables.boxshadowGray};
  z-index: 1;
`;
const ItemsDesplegable = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: #f1c40f;
  }
  svg {
    font-size: 28px;
    display: block;
  }
`;