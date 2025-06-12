import { variables } from "../../styles/variables";
import { useState } from "react";
import styled from "styled-components";
import { Device } from "../../styles/breackpoints";
import { TablaControl } from "../../index";

export function Tabs({data}) {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Container $activeTabIndex={activeTab}>
      <ul className="tabs">
        <li className={activeTab === 0 ? "active" : ""} onClick={() => handleClick(0)}>
          {<variables.iconopie />}
          Control
        </li>
        <span className="glider"></span>
      </ul>
      <div className="tab-content">
        {activeTab === 0 && <TablaControl data={data}/>}
        {activeTab === 1 && <span>tab2</span>}
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border: 1px solid #6a6b6c;
  border-radius: 15px;
  height: 100%;

  .tabs {
    list-style: none;
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    border-radius: 100px;
    flex-direction: row;

    li {
      gap: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 45px;
      width: 180px;
      font-size: 1.25rem;
      font-weight: 500;
      border-radius: 99px;
      cursor: pointer;
      transition: color 0.15s ease-in;
      position: relative;
      z-index: 2;
    }

    .glider {
      position: absolute;
      bottom: 0;
      height: 4px;
      width: 180px;
      background-color: #f1c40f;
      z-index: 1;
      border-radius: 15px;
      transition: transform 0.25s ease-out;
      transform: translateX(${(props) => props.$activeTabIndex * 180}px);
      box-shadow: 0px 10px 20px -3px #f1c40f;
      /*top:0; 
      @media ${Device.tablet}{
        transform: translateY(${(props) => props.activeTabIndex * 180}px);
        height: 4px; 
        width: 180px; 
        bottom: 0; 
        top: 100%;
      }*/
    }
  }

  .tab-content {
    margin-top: 20px;
    height: 100%;
    width: 100%;
    padding: 1rem;
    color: white;
  }
`;
