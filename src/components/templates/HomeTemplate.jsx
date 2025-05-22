import styled from "styled-components";
import { Btnsave, useAuthStore } from "../../index"
export function HomeTemplate() {
    
    return (
        <Container>
            <header className="header">

            </header>
            <section className="are1">

            </section>
            <section className="area2">

            </section>
            <section className="main">

            </section>
        </Container>
    )
}
const Container = styled.div`

    height: 100vh;
    width:100%;
    background-color:${(props)=>props.theme.bgtotal};
    color: ${({theme})=>theme.text};
    display:grid;
    grid-template:
    "header" 100px
    "area1" 100px
    "area2" 100px
    "main" auto
    ;
    .header{
        background-color: rgba(103, 93, 241, 0.14);
    }
    .area1{
    }
    .area2{
    }
    .main{
    }
`;