import { useEffect, useState } from "react";
import styled from "styled-components";
import { variables } from "../../../styles/variables";
import { Device } from "../../../styles/breackpoints";
import {
  InputText,
  Btnsave,
  ContainerSelector,
  Selector,
  ListaGenerica,
  TipoDocData,
  TipouserData,
  ListaModulos,
  useUsuariosStore,
} from "../../../index";
import { useForm } from "react-hook-form";
import { useEmpresaStore } from "../../../store/EmpresaStore";
import { useQuery } from "@tanstack/react-query";
export function RegistrarUsuarios({ onClose, dataSelect, accion }) {
  const { isLoading } = useQuery({
    queryKey: ["mostrar permisos Edit", { id_usuario: dataSelect.id }],
    queryFn: () => mostrarpermisosEdit({ id_usuario: dataSelect.id }),
  });

  const [checkboxs, setCheckboxs] = useState([]);
  const [tipodoc, setTipodoc] = useState({ icono: "", descripcion: "otros" });
  const [tipouser, setTipouser] = useState({
    icono: "",
    descripcion: "empleado",
  });
  const { insertarusuarios, mostrarpermisosEdit, editarusuarios } =
    useUsuariosStore();
  const { dataempresa } = useEmpresaStore();
  const [stateTipodoc, setStateTipodoc] = useState(false);
  const [stateTipouser, setStateTipouser] = useState(false);
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  async function insertar(data) {
    if (accion === "Editar") {
      const p = {
        id: dataSelect.id,
        nombres: data.nombres,
        nu_documento: data.nrdoc,
        telefono: data.telefono,
        direccion: data.direccion,
        tipouser: tipouser.descripcion,
        tipodoc: tipodoc.descripcion,
      };
      await editarusuarios(p, checkboxs, dataempresa.id);
      onClose();
    } else {
      const p = {
        nombres: data.nombres,
        correo: data.correo,
        nu_documento: data.nrdoc,
        telefono: data.telefono,
        direccion: data.direccion,
        tipouser: tipouser.descripcion,
        tipodoc: tipodoc.descripcion,
        id_empresa: dataempresa.id,
      };
      const parametrosAuth = {
        correo: data.correo,
        pass: data.pass,
      };
      await insertarusuarios(parametrosAuth, p, checkboxs);
      onClose();
    }
  }
  useEffect(() => {
    if (accion === "Editar") {
     setTipodoc({icono:"",descripcion:dataSelect.tipodoc})
     setTipouser({icono:"",descripcion:dataSelect.tipouser})
    }
  }, [accion, dataSelect.tipodoc, dataSelect.tipouser]);
  if (isLoading) {
    return <span>cargando...</span>;
  }

  return (
    <Container>
      <div className="sub-contenedor">
        <div className="headers">
          <section>
            <h1>
              {accion == "Editar"
                ? "Editar usuarios"
                : "Registrar nuevo usuario"}
            </h1>
          </section>

          <section>
            <span onClick={onClose}>x</span>
          </section>
        </div>

        <form className="formulario" onSubmit={handleSubmit(insertar)}>
          <section className="seccion1">
            {accion != "Editar" ? (
              <article>
                <InputText icono={<variables.icononombre />}>
                  <input
                    
                    className={
                      accion === "Editar"
                        ? "form__field disabled"
                        : "form__field"
                    }
                    defaultValue={dataSelect.correo}
                    type="text"
                    placeholder=""
                    {...register("correo", {
                      required: true,
                    })}
                  />
                  <label className="form__label">correo</label>
                  {errors.correo?.type === "required" && <p>Campo requerido</p>}
                </InputText>
              </article>
            ) : (
              <span className="form__field disabled">{dataSelect.correo}</span>
            )}

            {accion != "Editar" ? (
              <article>
                <InputText icono={<variables.icononombre />}>
                  <input
                    className="form__field"
                    defaultValue={dataSelect.pass}
                    type="text"
                    placeholder=""
                    {...register("pass", {
                      required: true,
                      minLength: 6,
                    })}
                  />
                  <label className="form__label">pass</label>
                  {errors.pass?.type === "required" && <p>Campo requerido</p>}
                  {errors.pass?.type === "minLength" && (
                    <p>Debe tener al menos 6 caracteres</p>
                  )}
                </InputText>
              </article>
            ) : null}

            <article>
              <InputText icono={<variables.icononombre />}>
                <input
                  className="form__field"
                  defaultValue={dataSelect.nombres}
                  type="text"
                  placeholder=""
                  {...register("nombres", {
                    required: true,
                  })}
                />
                <label className="form__label">Nombres</label>

                {errors.nombres?.type === "required" && <p>Campo requerido</p>}
              </InputText>
            </article>

            <ContainerSelector>
              <label>Tipo doc: </label>
              <Selector
                color="#fff"
                texto1="🗃️"
                texto2={tipodoc.descripcion}
                funcion={() => setStateTipodoc(!stateTipodoc)}
              />
              {stateTipodoc && (
                <ListaGenerica
                  data={TipoDocData}
                  bottom="-260px"
                  scroll="scroll"
                  setState={() => setStateTipodoc(!stateTipodoc)}
                  funcion={(p) => setTipodoc(p)}
                />
              )}
            </ContainerSelector>
            <article>
              <InputText icono={<variables.iconodoc/>}>
                <input
                  className="form__field"
                  defaultValue={dataSelect.nu_documento}
                  type="number"
                  placeholder=""
                  {...register("nrdoc", {
                    required: true,
                  })}
                />
                <label className="form__label">Nro. doc</label>

                {errors.nrodoc?.type === "required" && <p>Campo requerido</p>}
              </InputText>
            </article>
            <article>
              <InputText icono={<variables.iconophone/>}>
                <input
                  step="0.01"
                  className="form__field"
                  defaultValue={dataSelect.telefono}
                  type="text"
                  placeholder=""
                  {...register("telefono", {
                    required: true,
                  })}
                />
                <label className="form__label">Telefono</label>

                {errors.telefono?.type === "required" && <p>Campo requerido</p>}
              </InputText>
            </article>
            <article>
              <InputText icono={<variables.iconoaddress/>}>
                <input
                  className="form__field"
                  defaultValue={dataSelect.direccion}
                  type="text"
                  placeholder=""
                  {...register("direccion", {
                    required: true,
                  })}
                />
                <label className="form__label">Direccion</label>

                {errors.direccion?.type === "required" && (
                  <p>Campo requerido</p>
                )}
              </InputText>
            </article>
          </section>
          <section className="seccion2">
            <ContainerSelector>
              <label>Tipo: </label>
              <Selector
                color="#fc6027"
                texto1="👨‍💼"
                texto2={tipouser.descripcion}
                funcion={() => setStateTipouser(!stateTipouser)}
              />
              {stateTipouser && (
                <ListaGenerica
                  data={TipouserData}
                  funcion={(p) => setTipouser(p)}
                  bottom="-150px"
                  scroll="scroll"
                  setState={() => setStateTipouser(!stateTipouser)}
                />
              )}
            </ContainerSelector>

            PERMISOS:🔐
            <ListaModulos
              accion={accion}
              checkboxs={checkboxs}
              setCheckboxs={setCheckboxs}
            />
          </section>
          <div className="btnguardarContent">
            <Btnsave
              icono={<variables.iconoguardar />}
              titulo="Guardar"
              bgcolor="#f1c40f"
            />
          </div>
        </form>
      </div>
    </Container>
  );
}

const InputField = ({ icon, label, defaultValue, error, ...props }) => (
  <InputText icono={icon}>
    <input className="form__field" type="text" defaultValue={defaultValue} placeholder="" {...props} />
    <label className="form__label">{label}</label>
    {error && <p>Campo requerido</p>}
  </InputText>
);

const Container = styled.div`
  transition: 0.5s;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(10, 9, 9, 0.5);
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .sub-contenedor {
    width: 100%;
    max-width: 90%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bgtotal};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 20px 36px;
    z-index: 100;
    height: 90vh;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 6px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #484848;
      border-radius: 10px;
    }

    .headers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h1 {
        font-size: 20px;
        font-weight: 500;
      }

      span {
        font-size: 20px;
        cursor: pointer;
      }
    }

    .formulario {
      display: grid;
      grid-template-column: 1fr;
      gap: 15px;

      @media ${Device.tablet} {
        grid-template-columns: repeat(2, 1fr);
      }

      section {
        gap: 20px;
        display: flex;
        flex-direction: column;
      }

      .btnguardarContent {
        display: flex;
        justify-content: end;
        grid-column: 1;

        @media ${Device.tablet} {
          grid-column: 2;
        }
      }
    }
  }
`;
