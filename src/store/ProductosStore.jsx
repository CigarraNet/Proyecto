import { create } from "zustand";
import { BuscarProductos, EditarProductos,  EliminarProductos,  InsertarProductos, MostrarProductos, ReportStockProductosTodos, ReportStockXProducto, ReportStockBajoMinimo, ReportControlxEntredasSalidas } from "../index";
export const useProductosStore = create((set,get)=>({
    buscador: "",
    setBuscador:(p)=>{
        set({buscador:p})
    },
    dataproductos: [],
    productosItemSelect: [],
    parametros: {},
    mostrarproductos:async (p)=>{
        const response = await MostrarProductos(p);
        set({parametros:p});
        set({dataproductos:response});
        set({productosItemSelect:response[0]});
        return response;
    },
    selectproductos:(p)=>{
        set({productosItemSelect:p});
    },
    insertarproductos:async (p)=>{
        console.log("Datos que se están enviando:", p);
        await InsertarProductos(p);
        const {mostrarproductos, parametros}=get();
        await mostrarproductos(parametros);
    },
    eliminarproductos: async (p) => {
        await EliminarProductos(p);
        const { mostrarproductos, parametros } = get();
        await mostrarproductos(parametros);
    },
    editarproductos: async (p) => {
        await EditarProductos(p);
        const { mostrarproductos, parametros } = get();
        await mostrarproductos(parametros); 
    },
    buscarproductos: async (p) =>{
        const response = await BuscarProductos(p);
        set({dataproductos:response});
        return response;
    },
    reportStockProductosTodos: async (p) =>{
        const response = await ReportStockProductosTodos(p);
        return response;
    },
    reportStockXproducto: async (p) =>{
        const response = await ReportStockXProducto(p);
        return response;
    },
    reportBajoMinimo: async (p) =>{
        const response = await ReportStockBajoMinimo(p);
        return response;
    },
    reportControlxEntredasSalidas: async (p) =>{
        const response = await ReportControlxEntredasSalidas(p);
        return response;
    },
}));