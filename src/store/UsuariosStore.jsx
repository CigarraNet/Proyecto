import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
import { insertarUsuario } from "../supabase/crudUsuarios";

export const useUsuariosStore = create((set,get)=>({
    insertarUsuarioAdmin: async (p)=>{
        const {data,error} =await supabase.auth.signUp({
            email: p.correo,
            password: p.pass,
          });
          console.log("data del registro del user auth",data);
          if(error) return null;
          const datauser = await insertarUsuario({idauth:data.user.id,fecharegistro:new Date(),tipouser:"admin"
          });
          return datauser;
    },
}));