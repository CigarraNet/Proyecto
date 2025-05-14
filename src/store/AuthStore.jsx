import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
export const useAuthStore = create((set,get)=>({
    signInWithEmail: async (p)=>{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: p.email,
            password: p.pas,
          })
          if(error){
            return null;
          }
    },
    signOut: async ()=>{
        const { error } = await supabase.auth.signOut()
        if (error)
        throw new Error("Ocurrio un error en el cierre de sesion"+error) 
    }
}))