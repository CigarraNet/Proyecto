import { ObtenerIdAuthSupabase } from "./globalSupabase";
import { supabase } from "./supabase.config";
import Swal from 'sweetalert2';

export const InsertarUsuarios = async(p)=>{
    const {data,error} = await supabase.from("usuarios").insert(p).select().maybeSingle();
    if (error){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al insertar usuarios"+ error.message
          });
    }
    if (data) return data;
};
export const MostrarUsuarios = async ()=>{
    const idAuthSupabase = await ObtenerIdAuthSupabase();
    const {data}= await supabase.from("usuarios").select().eq("idauth",idAuthSupabase).maybeSingle();
    if(data){
        return data;
    }
};

export const MostrarUsuariosTodos = async (p)=>{
    const {data}= await supabase.rpc("mostrarpersonal", p)
    if(data){
        return data;
    }
};

export async function EliminarUsuarios(p) {
    const { error } = await supabase 
        .from("usuarios")
        .delete()
        .eq("id", p.id)
    if (error) {
        alert("Error al eliminar", error.message);
    }
};

export async function EditarUsuarios(p) {
    const { error } = await supabase 
        .from("usuarios")
        .update(p)
        .eq("id", p.id)
    if (error) {
        alert("Error al editar Usuarios", error.message);
    }
};

export async function BuscarUsuarios(p) {
    const { data } = await supabase.rpc("buscarpersonal",p)
    return data; 
};
//Tabla asignaciones
export const InsertarAsignaciones = async(p)=>{
    const {error} = await supabase.from("asignarempresa").insert(p)
    if (error){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al insertar asignación"+ error.message
          });
    }
};

//Tabla permisos
export async function InsertarPermisos(p) {
    const {error} = await supabase.from("permisos").insert(p)
    if (error){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al insertar permisos"+ error.message
          });
    }
};

export async function MostrarPermisos(p) {
    const {data} = await supabase.from("permisos").select(`id, id_usuario, modulos(nombre)`).eq("id_usuario", p.id_usuario);
    return data;
};

export async function EliminarPermisos(p) {
    const {error} = await supabase.from("permisos").delete().eq("id_usuario", p.id_usuario);
    if (error){
        alert("Error al eliminar", error);
    }
};

export async function MostrarModulos(){
    const { data } = await supabase.from("modulos").select();
    return data; 
}