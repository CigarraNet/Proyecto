import { Routes, Route} from "react-router-dom";
import { Configuracion, ErrorMolecula, Home, Login, ProtectedRoute, Control, SpinnerLoader, useEmpresaStore, UserAuth, useUsuariosStore, Marca, Categorias, Productos, Usuarios, Reportes} from "../index";
import { useQuery } from "@tanstack/react-query";
import StockActualTodos from "../components/organismos/report/StockActualTodos";
import StockActualPorProducto from "../components/organismos/report/StockActualPorProducto";
export function MyRoutes(){
    const {user} = UserAuth();
    const {mostrarUsuarios,idusuario, mostrarpermisos} = useUsuariosStore();
    const {mostrarEmpresa} = useEmpresaStore();
    const {data:datausuarios,isLoading,error} = useQuery({queryKey:["mostrar usuarios"],queryFn:mostrarUsuarios})
    

    const {data:dataempresa}=useQuery({queryKey:["mostrar empresa"],queryFn:()=>mostrarEmpresa({ idusuario: datausuarios?.id }),enabled: !!datausuarios?.id,})
    const {data:datapermisos}=useQuery({queryKey:["mostrar permisos",{id_usuario:idusuario}],queryFn:()=>mostrarpermisos({ id_usuario:idusuario }),enabled: !!datausuarios?.id,})
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
            <Route path="/configurar" element ={<Configuracion/>}/>
            <Route path="/configurar/marca" element ={<Marca/>}/>
            <Route path="/configurar/categorias" element ={<Categorias/>}/>
            <Route path="/configurar/productos" element ={<Productos/>}/>
            <Route path="/configurar/personal" element ={<Usuarios/>}/>
            <Route path="/control" element ={<Control/>}/>
            <Route path="/reportes" element ={<Reportes/>}>
                    <Route path="stock-actual-todos" element={<StockActualTodos/>}/>
                    <Route path="stock-actual-por-producto" element={<StockActualPorProducto/>}/>
                </Route>
            </Route>
        </Routes>
    )
}