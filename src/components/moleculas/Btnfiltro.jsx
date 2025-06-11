import styled from "styled-components";
export function Btnfiltro({ bgcolor, textcolor, icono, funcion}) {
    return (<Container $textcolor={textcolor} $bgcolor={bgcolor} onClick={funcion}>
        <div className="contentIcon">
            <span>{icono}</span>
        </div>
    </Container>
    );
}
const Container =styled.div`
    min-width: 50px;
    min-height: 50px;
    border-radius: 50%;
    background-color: #f1c40f;
    color: #000; 
    display: flex; 
    align-item: center; 
    justify-content: center; 
    font-size: 20px;
    position: relative; 
    cursor: pointer; 
    .contentIcon {
        position: absolute; 
        top: 25%;
        bottom: 15%; 
        left: 0; 
        right: 0; 
        display: flex; 
        justify-content: center; 
        transition: 0.2s; 
        &:hover {
            transform: scale(1.3); 
        }
    }
`;




