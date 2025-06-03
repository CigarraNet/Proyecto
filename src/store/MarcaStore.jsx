import { create } from "zustand";
export const useMarcaStore = create((set,get)=>({
    buscador: "",
    setBuscador:(p)=>{
        set({buscador:p})
    },
    datamarca: [],
}))