import { useQuery } from "@tanstack/react-query";
import {
  BloqueoPagina,
  ControlTemplate,
  SpinnerLoader,
  useControlStore,
  useEmpresaStore,
  useProductosStore,
  useUsuariosStore,
} from "../index";

export function Control() {
    const {buscarproductos,buscador:buscadorproductos} = useProductosStore();
  const {datapermisos} = useUsuariosStore();
  const statePermiso = datapermisos.some((objeto)=>objeto.modulos.nombre.includes("Marca de productos"))


  const { mostrarcontrol, datacontrol, buscarcontrol, buscador } = useControlStore();
  const { dataempresa } = useEmpresaStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar control", {_id_empresa: dataempresa?.id }],
    queryFn: () => mostrarcontrol({_id_empresa: dataempresa?.id }),
    enabled: dataempresa?.id != null,
  });
  const {data:buscarcontrollista} = useQuery({queryKey:["buscar control",{_id_empresa:dataempresa.id,buscador:buscador}],queryFn:()=>buscarcontrol({_id_empresa:dataempresa.id,buscador:buscador}),
    enabled:dataempresa.id!=null,
});
  const {data:buscardata} = useQuery({queryKey:["buscar productos",{id_empresa:dataempresa.id,descripcion:buscadorproductos}],queryFn:()=>buscarproductos({_id_empresa:dataempresa.id,buscador:buscadorproductos}),
    enabled:dataempresa.id!=null,
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

  return <ControlTemplate data={datacontrol}/>;
}