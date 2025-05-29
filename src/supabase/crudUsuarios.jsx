import { ObtenerIdAuthSupabase } from "./globalSupabase";
import { supabase } from "./supabase.config";
import Swal from 'sweetalert2';

export const insertarUsuario = async(p)=>{
    const {data,error} = await supabase.from("usuarios").insert(p).select().maybeSingle();
    if (error){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al insertar usuarios"+ error.message
          });
    }
    if (data) return data;
}
export const MostrarUsuarios = async ()=>{
    const idAuthSupabase = await ObtenerIdAuthSupabase();
    const {error,data}= await supabase.from("usuarios").select().eq("",idAuthSupabase).maybeSingle();
    if(data){
        return data;
    }
};

