import { create } from "zustand";
import { MostrarEmpresa, ContarUsuariosXempresa } from "../index";


export const useEmpresaStore = create((set)=>({
    contadorusuarios:0,
    dataempresa:[],
    mostrarEmpresa: async (p) => {
        const response = await MostrarEmpresa(p);
        set({dataempresa: response.empresa });
        return response.empresa;
    },
    contarusuariosXempresa: async (p) =>{
        const response = await ContarUsuariosXempresa(p);
        set({contadorusuarios:response});
        return response;
    }
}));