import { variables } from "../styles/variables";
import {
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";

export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: <variables.iconoUser/>,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: <variables.iconoSettings/>,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <variables.iconoCerrarSesion/>,
    tipo: "cerrarsesion",
  },
];



//data SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Categorias",
    icon: <variables.iconocategorias />,
    to: "/categorias",
  },
  {
    label: "Reportes",
    icon: <variables.iconoreportes />,
    to: "/reportes",
  },
 
];
export const SecondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/configurar",
  },

];
//temas
export const TemasData = [
 
];

//data configuracion
export const DataModulosConfiguracion =[
  {
    title:"Productos",
    subtitle:"registra tus productos",
    icono: "https://cdn-icons-png.flaticon.com/512/4592/4592866.png",
    link:"/configurar/productos",
   
  },
  {
    title:"Personal",
    subtitle:"ten el control de tu personal",
    icono:"https://cdn-icons-png.flaticon.com/512/3128/3128612.png",
    link:"/configurar/usuarios",
   
  },

  {
    title:"Tu negocio",
    subtitle:"configura tus opciones básicas",
    icono:"https://cdn-icons-png.flaticon.com/512/1198/1198412.png",
    link:"/configurar/empresa",
    
  },
  {
    title:"Categoria de productos",
    subtitle:"asigna categorias a tus productos",
    icono:"https://cdn-icons-png.flaticon.com/512/1312/1312256.png",
    link:"/configurar/categorias",
    
  },
  {
    title:"Marca de productos",
    subtitle:"gestiona tus marcas",
    icono:"https://cdn-icons-png.flaticon.com/512/1253/1253360.png",
    link:"/configurar/marca",
   
  },

]
//tipo usuario
export const TipouserData = [
  {
    descripcion: "empleado",
    icono: "🪖",
  },
  {
    descripcion: "administrador",
    icono: "👑",
  },
];
//tipodoc
export const TipoDocData = [
  {
    descripcion: "Dni",
    icono: "🪖",
  },
  {
    descripcion: "Libreta electoral",
    icono: "👑",
  },
  {
    descripcion: "Otros",
    icono: "👑",
  },
];