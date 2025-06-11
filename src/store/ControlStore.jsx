import { create } from "zustand";
import { BuscarControl, EditarControl, EliminarControl, InsertarControl, MostrarControl } from "../index";
export const useControlStore = create((set,get)=>({
    buscador: "",
    setBuscador:(p)=>{
        set({buscador:p})
    },
    datacontrol: [],
    controlItemSelect: [],
    parametros: {},
    mostrarcontrol:async (p)=>{
        const response = await MostrarControl(p);
        set({parametros:p});
        set({datacontrol:response});
        set({controlItemSelect:response[0]});
        return response;
    },
    selectcontrol:(p)=>{
        set({controlItemSelect:p})
    },
    insertarcontrol:async (p)=>{
        console.log("Datos que se están enviando:", p);
        await InsertarControl(p);
        const {mostrarcontrol, parametros}=get();
        await mostrarcontrol(parametros);
    },
    eliminarcontrol: async (p) => {
        await EliminarControl(p);
        const { mostrarcontrol, parametros } = get();
        await mostrarcontrol(parametros);
    },
    editarcontrol: async (p) => {
        await EditarControl(p);
        const { mostrarcontrol, parametros } = get();
        await mostrarcontrol(parametros); 
    },
    buscarcontrol: async (p) =>{
        const response = await BuscarControl(p);
        set({datacontrol:response});
        return response;
    }
}));