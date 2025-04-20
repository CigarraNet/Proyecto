import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
export function ToggleTema() {
  const { setTheme } = useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <Container>
      
    </Container>
  );
}
const Container = styled.div`
`;