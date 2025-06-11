import styled from "styled-components";
import { BannerEmpresa, Btnsave, Header, Title, } from "../../index"
import { useState } from "react";
export function HomeTemplate() {
    const [state, setState] = useState(false);
    
    return (
        <Container>
            <header className="header">
                <Header
                    stateConfig={{ state: state, setState: () => setState(!state) }}
                />

            </header>
            <section className="area1">
                <Title>Tu negoció</Title>
            </section>
            <section className="main">
                <BannerEmpresa/>
            </section>
        </Container>
    )
}
const Container = styled.div`

    height: 100vh;
    width:100%;
    background-color:${(props)=>props.theme.bgtotal};
    color: #fff;
    display:grid;
    padding:15px;
    grid-template:
    "header" 100px
    "area1" 100px
    "main" auto
    ;
    .header{
        grid-area:header;
        /*background-color: rgba(103, 93, 241, 0.14);*/
        display: flex;
        align-items: center;
    }
    .area1{
        grid-area:area1;
        /*background-color:rgba(229, 67, 26, 0.14);*/
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .main{
        grid-area:main;
        /*background:rgba(179, 46, 241, 0.14);*/
        display: flex;
        align-items: center;
    }
`;