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
