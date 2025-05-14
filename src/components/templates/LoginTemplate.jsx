import styled from "styled-components";
import { Btnsave } from "../moleculas/Btnsave";
import { useUseriosStore } from "../../store/UsuariosStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
export function LoginTemplate() {
    const navigate = useNavigate ();
    const { insertarUsuarioAdmin } = useUseriosStore ();
    const mutationInsertUser = useMutation({
        mutationKey:["inserta usuario admin"],mutationFn:async()=>{
            const p ={
                email:"pruebas1@gmail.com",
                pas: "MAH123211",
            };
            const dt = await insertarUsuarioAdmin(p);
            if (dt){
                navigate("/home");
            } 
        },
    });
    return (<Container>
<Btnsave titulo="Crear cuenta" bgcolor="#fff" funcion={mutationInsertUser.mutateAsync}/>
    </Container>);
}
const Container = styled.div`
    height:100vh;
`;