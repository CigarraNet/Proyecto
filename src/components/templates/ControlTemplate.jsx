import styled from "styled-components";
import { Btnsave, Buscador, ContentFiltro, Header, RegistrarControl, Tabs, Title,useControlStore,useMarcaStore } from "../../index";
import { useState } from "react";
export function ControlTemplate({data}) {
  const [state, setState] = useState(false);
  const [dataSelect, setdataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  const [openRegistro, SetopenRegistro] = useState(false);
  const [tipo, setTipo] = useState("");
  const nuevaentrada=()=>{
    SetopenRegistro(true);
    setTipo("entrada")
  }
  const nuevasalida=()=>{
    SetopenRegistro(true);
    setTipo("salida")
  }


  const {setBuscador} = useControlStore()
  return (
    <Container>
      {
        openRegistro &&  <RegistrarControl tipo={tipo}dataSelect={dataSelect} accion={accion} onClose={()=>SetopenRegistro(!openRegistro)}/>
      }
     
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1">
        <ContentFiltro>
          <Title>
            Control
          </Title>
           <Btnsave bgcolor={"#28b463"} titulo={"+ Entrada"} funcion={nuevaentrada}/>
           <Btnsave bgcolor={"#c62828 "} titulo={"- Salida"} funcion={nuevasalida}/>
        </ContentFiltro>
       
      </section>
      <section className="area2">
        <Buscador setBuscador={setBuscador}/>
      </section>
      <section className="main">
        <Tabs  data={data}/>
      </section>
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  padding: 15px;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 100px
    "main" auto;
  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
    /* background-color: rgba(229, 67, 26, 0.14); */
    display: flex;
    align-items: center;
  }
  .area2 {
    grid-area: area2;
    /* background-color: rgba(77, 237, 106, 0.14); */
    display: flex;
    align-items: center;
    justify-content:end;
  }
  .main {
    grid-area: main;
    /* background-color: rgba(179, 46, 241, 0.14); */
  }
`;