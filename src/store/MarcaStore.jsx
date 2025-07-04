import { create } from "zustand";
import { BuscarMarca, EditarMarca, EliminarMarca, InsertarMarca, MostrarMarca } from "../index";
export const useMarcaStore = create((set,get)=>({
    buscador: "",
    setBuscador:(p)=>{
        set({buscador:p})
    },
    datamarca: [],
    marcaItemSelect: [],
    parametros: {},
    mostrarMarca:async (p)=>{
        const response = await MostrarMarca(p);
        set({parametros:p});
        set({datamarca:response});
        set({marcaItemSelect:response[0]});
        return response;
    },
    selectMarca:(p)=>{
        set({marcaItemSelect:p})
    },
    insertarMarca:async (p)=>{
        console.log("Datos que se están enviando:", p);
        await InsertarMarca(p);
        const {mostrarMarca, parametros}=get();
        await mostrarMarca(parametros);
    },
    eliminarMarca: async (p) => {
        await EliminarMarca(p);
        const { mostrarMarca, parametros } = get();
        await mostrarMarca(parametros);
    },
    editarMarca: async (p) => {
        await EditarMarca(p);
        const { mostrarMarca, parametros } = get();
        await mostrarMarca(parametros); 
    },
    buscarMarca: async (p) =>{
        const response = await BuscarMarca(p);
        set({datamarca:response});
        return response;
    }
}));