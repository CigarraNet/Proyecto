import styled from "styled-components";
import { BtnCerrar } from "../atomos/BtnCerrar";
import {Device} from "../../styles/breackpoints"
export function ListaGenerica({data,setState,funcion,scroll,bottom}) {
    const seleccionar = (p) =>{
        funcion(p);
        setState();
    }
    return (<Container $scroll={scroll} $bottom={bottom}>
        <section className="contentClose">
            <BtnCerrar funcion={setState}/>
        </section>
        <section className="contentItems">
            {data?.map((item,index)=>{
                return(<ItemContainer key={index} onClick={()=>seleccionar(item)}>
                    <span></span>
                    <span>{item.descripcion}</span>
                </ItemContainer>)
            })}
        </section>
    </Container>
    );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #171717;
  color: #fff;
  position: absolute;
  margin-bottom: 15px;
  bottom: ${(props) => props.$bottom};
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  z-index: 3;
  @media ${Device.tablet} {
    width: 400px;
  }

  .contentItems {
    overflow-y: auto;       /* ← SIEMPRE scroll si hace falta */
    max-height: 170px;      /* ← Altura máxima que habilita scroll */
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const ItemContainer = styled.div`
    gap: 10px; 
    display: flex; 
    padding: 10px; 
    border-radius: 10px; 
    cursor: pointer; 
    transition: 0.3s; 
    &:hover{
        background-color: #f1c40f;
    }
`;

