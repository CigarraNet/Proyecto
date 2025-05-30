import styled from "styled-components";
import { variables } from "../../styles/variables";
import { CardDatosNegocio } from "../moleculas/CardDatosNegocio";
export function BannerEmpresa() {
    return (<Container>
        <div className="content-wrapper-context">
        <span className="titulo">
            {<variables.iconoempresa/>}
            Nombre de negocio
        </span>  
        <div className="content-text">
            Cigarra.Net siempre te esta informando.            
        </div>    
        <ContentCards>
            <CardDatosNegocio titulo="Moneda"
            valor="COP/."/>
            <CardDatosNegocio titulo="Usuarios"
            valor="100"/>
        </ContentCards>    
        </div>
    </Container>);
}
const Container =styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex; 
    align-items: center;
    justify-content: center;
    border: 0 solid #6b6b6b;
    background-size: contain;
    background-position:  center;
    background-repeat: no-repeat, repeat;
    border-radius: 14px; 
    overflow: hidden;
    .content-wrapper-context{
        padding: 20px;
        gap: 10p; 
        display: flex; 
        flex-direction: column;
        .titulo{
            font-size: 30px;
            font-weight: 700;
            gap: 10px; 
            display: flex; 
            align-items: center;
        }
        .content-text{
            font-weight: 400;
            font-size: 14px;
            line-height: 1.7em;
            color: #ebecec;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden; 
            text-overflow: ellipsis;
        }
    }
`;
const ContentCards = styled.div`
    display: flex;
    gap: 10px;
    padding-top: 15;
    cursor: pointer;
`;