import styled from "styled-components";
export function CardProductosSelect({text1,text2}) {
    return (<Container >
        <span className="descripcion"> {text1}</span>
        <span className="stock">Stock actual: {text2}</span>
    </Container>
    );
}
const Container =styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;
border-radius: 15px; 
border: 1px dashed #54f04f;
padding: 10px;
    .descripcion{
        color: #54f04f;
    }
    .stock{
        color: #fff;
    }
`;

