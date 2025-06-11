import styled from "styled-components";
import {FaSearch} from "react-icons/fa"
export function Buscador({ setBuscador, onFocus, funcion }) {
    const buscar = (e) => {
        setBuscador(e.target.value);
        if (funcion) {
            funcion();
        }
    };

    function ejecutarfuncion (){
        if(funcion){
            funcion();
        }
    }

    return (
        <Container onClick={ejecutarfuncion}>
            <article className="content">
                <FaSearch className="icono" />
                <input
                    onFocus={onFocus}
                    onChange={buscar}
                    placeholder="...buscar"
                />
            </article>
        </Container>
    );
}
const Container =styled.div`
    background-color: #171717;
    border-radius: 10px;
    height: 50px;
    align-items: center; 
    display: flex; 
    color: #000; 
    border: 1px solid #414244;
    .content{
        padding: 15px;
        gap: 10px;
        display: flex;
        align-items: center; 
        position: relative;
        width: 100%;
        color: #fff;
        .icono{
            font-size: 15px;
        }
        input{
            font-size: 18px; 
            width: 90%;
            outline: none;
            background: none;
            border: 0; 
            color:  #fff;
        }
    }
`;
