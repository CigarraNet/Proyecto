import styled from "styled-components";
import { variables } from "../../styles/variables";
export function Selector({color, state, funcion, texto1, texto2 }) {
    return (<Container $color={color} onClick={funcion}>
        <div>
            <span>{texto1}</span>
            <span>{texto2}</span>
        </div>
        <span className={state?"open":"close"}>{<variables.iconoFlechabajo/>}</span>
    </Container>
    );
}
const Container =styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    height: 100%;
    cursor: pointer; 
    border: 2px solid #f1c40f;
    border-radius: 10px; 
    padding: 5px;
    gap: 10px;
    .open{
        transition: 0.3s;
        transform: rotate(0deg);
    }
    .close{
        transition: 0.3s;
        transform: rotate(180deg);
    }
    &:hover{
        background-color: #f1c40f;
        color: #000;
    }
`;



