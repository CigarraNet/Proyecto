import styled from "styled-components";
import { variables } from "../../../index";
export function Paginacion({table, pagina, maximo, irinicio}) {
    return (<Container>
        <button onClick={()=> irinicio()} disabled={!table.getCanPreviousPage()}>
        <span className="iconos">{<variables.iconotodos/>}</span>
        </button>
        <button disabled={!table.getCanPreviousPage()} onClick={()=>table.previousPage()}>
        <span className="iconos izquierda">{<variables.iconoflechaderecha/>}</span>
        </button>
        <span>{pagina}</span>
        <p> de {maximo}</p>
        <button disabled={!table.getCanNextPage()} onClick={()=>table.nextPage()}>
        <span className="iconos">{<variables.iconoflechaderecha/>}</span>
        </button>
    </Container>
    );
}
const Container =styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;
    gap: 15px;
    button{
        background-color: #f1c40f;
        border: none;
        padding: 5px 10 px; 
        border-radius: 3px;
        height: 20px;
        width: 20px;
        display: flex; 
        align-items: center; 
        justify-content: center;
        cursor: pointer;
        text-align: center; 
        transition: 0.3s;
        &:hover{
            box-shadow: 0px 10px 15px -3px ${(props) => props.$colorCategoria}; 
        }
        .iconos{
            color: #000;
        &.izquierda{
            transform: rotate(-180deg);
        }
        }
    }
    button[disabled]{
        background-color: #646464;
        cursor: no-drop;
        box-shadow: none;
    }
`;
