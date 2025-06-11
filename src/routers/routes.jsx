import { Routes, Route, Navigate } from "react-router-dom";
import { Configuracion, Home, Login, ProtectedRoute, Control,  Marca, Categorias, Productos, Usuarios, Reportes} from "../index";
import StockActualTodos from "../components/organismos/report/StockActualTodos";
import StockActualPorProducto from "../components/organismos/report/StockActualPorProducto";
import StockBajoMinimo from "../components/organismos/report/StockBajoMinimo";
import ControlEntradasSalidas from "../components/organismos/report/ControlEntradasSalidas";
import { Layout } from "../hooks/Layout";
export function MyRoutes(){
    
    return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      
      <Route path="/login" element={
        <ProtectedRoute accessBy="non-authenticated">
          <Login />
        </ProtectedRoute>} 
      />

      <Route path="/home" element={
        <ProtectedRoute accessBy="authenticated">
          <Layout>
            <Home />
          </Layout>
        </ProtectedRoute>} 
      />
      <Route path="/configurar" element={
        <ProtectedRoute accessBy="authenticated">
          <Layout>
            <Configuracion />
          </Layout>
        </ProtectedRoute>} 
      />
      <Route path="/configurar/marca" element={
        <ProtectedRoute accessBy="authenticated">
          <Layout>
            <Marca />
          </Layout>
        </ProtectedRoute>} 
      />
      <Route path="/configurar/categorias"element={
        <ProtectedRoute accessBy="authenticated">
          <Layout>
            <Categorias />
          </Layout>
        </ProtectedRoute>} 
      />
      <Route path="/configurar/productos"element={
        <ProtectedRoute accessBy="authenticated">
          <Layout>
            <Productos />
          </Layout>
        </ProtectedRoute>} 
      />
      <Route path="/configurar/personal"element={
        <ProtectedRoute accessBy="authenticated">
          <Layout>
            <Usuarios />
          </Layout>
        </ProtectedRoute>} 
      />
      <Route path="/control"element={
        <ProtectedRoute accessBy="authenticated">
          <Layout>
            <Control />
          </Layout>
        </ProtectedRoute>} 
      />
      <Route path="/reportes"element={
        <ProtectedRoute accessBy="authenticated">
          <Layout>
            <Reportes/>
          </Layout>
        </ProtectedRoute>} 
      >
        <Route path="stock-actual-todos" element={<StockActualTodos/>}/>
        <Route path="stock-actual-por-producto" element={<StockActualPorProducto/>}/>
        <Route path="stock-bajo-minimo" element={<StockBajoMinimo/>}/>
        <Route path="control-entradas-salidas" element={<ControlEntradasSalidas/>}/>
      </Route>
            
</Routes>
    )
}