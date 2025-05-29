import { Routes, Route} from "react-router-dom";
import { ErrorMolecula, Home, Login, MostrarUsuarios, ProtectedRoute, SpinnerLoader, UserAuth, useUsuariosStore } from "../index";
import { useQuery } from "@tanstack/react-query";
export function MyRoutes(){
    const {user} = UserAuth();
    const {mostrarUsuarios} = useUsuariosStore()
    const {data,isLoading,error} = useQuery({queryKey:["mostrar usuarios"],queryFn:mostrarUsuarios})
    if (isLoading){
        return <SpinnerLoader/>
    }
    if(error){
        return <ErrorMolecula mensaje={error.message}/>
    }
    return( 
        <Routes>
            <Route path="/login" element ={<Login/>}/>
            <Route element={<ProtectedRoute user={user} redirectTo="/login"/>}>
                <Route path="/home" element ={<Home/>}/>
            </Route>
        </Routes>
    )
}