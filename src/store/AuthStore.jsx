import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
export const useAuthStore = create(()=>({
    signInWithEmail: async (p)=>{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: p.correo,
            password: p.pass,
          })
          if(error){
            return null;
          }
          return data.user;
    },
    signOut: async ()=>{
        const { error } = await supabase.auth.signOut()
        if (error)
        throw new Error("Ocurrio un error en el cierre de sesion"+error) 
    }
}))