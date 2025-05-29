import styled from "styled-components";
import { BeatLoader } from "react-spinners";
export function SpinnerLoader() {
    return (<Container>
        <BeatLoader color="#f1c40f" size={25}/>
    </Container>)
}
const Container =styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    background: #1c1c1e;
    transform: all 0.3s;
`;