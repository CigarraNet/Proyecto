import styled from "styled-components";
import { AccionTabla, variables } from "../../index";
export function ContentAccionesTabla({funcionEditar,funcionEliminar}) {
    return (<Container>
        <AccionTabla funcion={funcionEditar} fontSize="18px" color="#f1c40f" icono={<variables.iconeditarTabla/>}/>
        <AccionTabla funcion={funcionEliminar} fontSize="18px" color="#c62828 " icono={<variables.iconeliminarTabla/>}/>

    </Container>)
}
const Container =styled.div`
    display: flex;
    gap: 10px;
    justify-content:center;
    flex-wrap: wrap;
    @media (max-width: 48em){
        justify-content:end;
    }
`;