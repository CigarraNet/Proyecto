import { supabase } from "../index";
import Swal from "sweetalert2";
export async function InsertarControl(p) {
    const {error} = await supabase.from("control").insert(p)
    if(error){
        Swal.fire({
            icon: "error",
            title: "Oops..",
            text: error.message,
            footer: '<a href="">Agregue una nueva descripcion<a/>',
        });
    }
}

export async function MostrarControl(p) {
    const { data } = await supabase.rpc("mostrarcontrolxempresa",p).order("id",{ascending:false});
    return data;
}

export async function EliminarControl(p) {
    const { error } = await supabase 
        .from("control")
        .delete()
        .eq("id", p.id)
    if (error) {
        alert("Error al eliminar", error.message);
    }
}

export async function EditarControl(p) {
    const { error } = await supabase 
        .from("control")
        .update(p)
        .eq("id", p.id)
    if (error) {
        alert("Error al editar Control", error.message);
    }
}

export async function BuscarControl(p) {
    const { data } = await supabase.rpc("buscarcontolxempresa",p)
    return data; 
}