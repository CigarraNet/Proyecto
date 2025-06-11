import styled from "styled-components";
import { variables } from "../../styles/variables";
export function BtnCerrar({funcion}) {
    return (<Container onClick={funcion}>
        {<variables.iconocerrar/>}
    </Container>
    );
}
const Container =styled.div`
    cursor: pointer;
    font-size: 25px;
    transition: all 0.2s; 
    &:hover {
        color: #f1c40f;
    }
`;



