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
    to: "/home",
  },
  {
    label: "Control",
    icon: <variables.iconocategorias />,
    to: "/control",
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
    icono: "https://i.ibb.co/DgV141Vh/Dise-o-sin-t-tulo-2.png",
    link:"/configurar/productos",
   
  },
  {
    title:"Personal",
    subtitle:"ten el control de tu personal",
    icono:"https://i.ibb.co/GzgdXQF/Dise-o-sin-t-tulo-4.png",
    link:"/configurar/personal",
   
  },

  {
    title:"Tu negocio",
    subtitle:"configura tus opciones básicas",
    icono:"https://i.ibb.co/TMb0vBt2/Dise-o-sin-t-tulo-3.png",
    link:"/configurar/empresa",
    
  },
  {
    title:"Categoria de productos",
    subtitle:"asigna categorias a tus productos",
    icono:"https://i.ibb.co/WvL8Hhnv/Dise-o-sin-t-tulo-5.png",
    link:"/configurar/categorias",
    
  },
  {
    title:"Marca de productos",
    subtitle:"gestiona tus marcas",
    icono:"https://i.ibb.co/Q3wxVKtx/Dise-o-sin-t-tulo-6.png",
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
    descripcion: "CC",
    icono: "🪖",
  },
  {
    descripcion: "Ti",
    icono: "👑",
  },
  {
    descripcion: "Otros",
    icono: "👑",
  },
];