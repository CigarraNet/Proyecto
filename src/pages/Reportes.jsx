import { useQuery } from "@tanstack/react-query";
import {
  BloqueoPagina,
  ReportesTemplate,
  SpinnerLoader,
  useControlStore,
  useEmpresaStore,
  useUsuariosStore,
} from "../index";

export function Reportes() {
  const {datapermisos} = useUsuariosStore();
  const statePermiso = datapermisos.some((objeto)=>objeto.modulos.nombre.includes("Marca de productos"))


  const { mostrarcontrol } = useControlStore();
  const { dataempresa } = useEmpresaStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar control", {_id_empresa: dataempresa?.id }],
    queryFn: () => mostrarcontrol({_id_empresa: dataempresa?.id }),
    enabled: dataempresa?.id != null,
  });
  
  if (statePermiso == false) {
    return <BloqueoPagina />;
  }
  if (isLoading) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <span>Error...</span>;
  }

  return <ReportesTemplate/>;
}