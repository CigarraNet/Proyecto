import styled from "styled-components";
import { useUsuariosStore } from "../store/UsuariosStore";
import { useEmpresaStore } from "../store/EmpresaStore";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Sidebar } from "../components/organismos/sidebar/Sidebar";
import { MenuHambur } from "../components/organismos/MenuHambur";
import { Device } from "../styles/breackpoints";
import { SpinnerLoader } from "../components/moleculas/SpinnerLoader";
import { ErrorMolecula } from "../components/moleculas/ErrorMolecula";

export function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { mostrarUsuarios, idusuario, mostrarpermisos } = useUsuariosStore();
  const { mostrarEmpresa } = useEmpresaStore();

  // Obtener usuarios
  const {
    data: datausuarios,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: mostrarUsuarios,
  });

  // Obtener empresa (solo cuando haya ID de usuario)
  const {
    data: dataempresa,
    error: errorEmpresa,
  } = useQuery({
    queryKey: ["mostrar empresa", datausuarios?.id],
    queryFn: () => {
      if (!datausuarios?.id) return Promise.reject("ID de usuario no disponible");
      return mostrarEmpresa({ idusuario: datausuarios.id });
    },
    enabled: !!datausuarios?.id,
  });

  // Obtener permisos (solo cuando haya ID de usuario en el store)
  const {
    data: datapermisos,
    error: errorPermisos,
  } = useQuery({
    queryKey: ["mostrar permisos", idusuario],
    queryFn: () => {
      if (!idusuario) return Promise.reject("ID de usuario no disponible");
      return mostrarpermisos({ id_usuario: idusuario });
    },
    enabled: !!idusuario,
  });

  if (isLoading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <ErrorMolecula mensaje={error.message} />;
  }

  return (
    <Container className={sidebarOpen ? "active" : ""}>
      <div className="ContentSidebar">
        <Sidebar state={sidebarOpen} setState={() => setSidebarOpen(!sidebarOpen)} />
      </div>
      <div className="ContentMenuambur">
        <MenuHambur />
      </div>
      <ContentRoutes>{children}</ContentRoutes>
    </Container>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.bgtotal};

  .ContentSidebar {
    display: none;
  }

  .ContentMenuambur {
    display: block;
    position: absolute;
    left: 20px;
  }

  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active {
      grid-template-columns: 220px 1fr;
    }

    .ContentSidebar {
      display: initial;
    }

    .ContentMenuambur {
      display: none;
    }
  }
`;

const ContentRoutes = styled.div`
  grid-column: 1;
  width: 100%;

  @media ${Device.tablet} {
    grid-column: 2;
  }
`;
