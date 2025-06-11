import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);     // ✅ Cambiado de [] a null
  const [loading, setLoading] = useState(true); // ✅ Nuevo estado para control de carga

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth change event:", event, session);
        if (session?.user == null) {
          setUser(null);
        } else {
          console.log("Usuario autenticado:", session.user);
          setUser(session.user);
        }
        setLoading(false);
      }
    );

    // Verifica si ya hay una sesión activa
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe(); // ✅ Corregido
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
