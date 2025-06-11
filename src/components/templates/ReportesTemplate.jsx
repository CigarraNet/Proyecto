import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
export function ReportesTemplate() {
    return (
        <Container>
            <PageContainer>
                <Content>
                   <Outlet/>  
                </Content>
            <Sidebar>
                <SidebarSection>
                    <SidebarTitle>Stock Actual</SidebarTitle>
                    <SidebarItem to="stock-actual-por-producto">Por producto</SidebarItem>
                    <SidebarItem to="stock-actual-todos">Todos</SidebarItem>
                    <SidebarItem to="stock-bajo-minimo">Bajo del minimo</SidebarItem>
                </SidebarSection>
                <SidebarSection>
                    <SidebarTitle>Entradas y Salidas</SidebarTitle>
                    <SidebarItem to="control-entradas-salidas">Por producto</SidebarItem>
                </SidebarSection>
            </Sidebar>
            </PageContainer>
        </Container>
    )
}
const Content = styled.div`
    padding: 20px;
    border-radius: 8px; 
    margin: 20px; 
    flex: 1; 
`;
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    justify-content: center;
    width: 100%;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;
const Container = styled.div`
    min-height: 100vh;
    padding: 15px;
    width: 100%;
    color: #fff;

`;
const Sidebar = styled.div`
    padding: 20px; 
    display: flex;
    flex-direction: column; 
    gap: 10px;
    @media (min-width: 768px){
        width: 250px;
        order: 2;
    }
`;
const SidebarSection = styled.div`
    margin-bottom: 20px; 
    border-radius: 10px;
    border: 2px solid #000; 
    padding: 12px;
`;

const SidebarTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 1.2rem;
`;

const SidebarItem = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 10px; 
    padding: 10px;
    border-radius: 12px;
    cursor: pointer;
    margin: 5px 0; 
    padding: 0 5%;
    text-decoration: none; 
    color: #fff;
    height: 60px;
    &:hover{
        color: #f1c40f;
    }
    &.active{
    background: #f1c40f;
    border: 2px solid #000;
    color: #000;
    font-weight: 600;
    }
`;
