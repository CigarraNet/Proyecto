import { useEffect, useState } from "react";
import styled from "styled-components";
import { variables } from "../../../styles/variables";
import { InputText, Btnsave,  Buscador, ListaGenerica, useProductosStore, CardProductosSelect, useControlStore, useUsuariosStore } from "../../../index";
import { useForm } from "react-hook-form";
import { useEmpresaStore } from "../../../store/EmpresaStore";
export function RegistrarControl({ onClose, dataSelect, accion, tipo }) {
  const [stateListaProd, SetstateListaProd] = useState(false);
  const {idusuario} = useUsuariosStore();
  const {dataproductos,setBuscador,selectproductos, productosItemSelect} = useProductosStore();
  const { insertarcontrol } = useControlStore();
  const { dataempresa } = useEmpresaStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  async function insertar(data) {
      const p = {
        fecha:new Date(),
        tipo:tipo,
        id_usuario: idusuario,
        cantidad:parseFloat(data.cantidad),
        detalle:data.detalle,
        id_empresa:dataempresa.id,
        id_producto:productosItemSelect.id
      };
      await insertarcontrol(p);
      onClose();
    }
  
  useEffect(() => {
    if (accion === "Editar") {
      // lógica futura para cargar algo
    }
  }, [accion]);
  return (
    <Container>
      <div className="sub-contenedor">
        <div className="headers">
          <section>
            <h1>
              Nueva{tipo == "entrada" ? "entrada" : "salida"}
            </h1>
          </section>

          <section>
            <span onClick={onClose}>x</span>
          </section>
        </div>
        <div className="contentBuscador">
          <div onClick={()=>SetstateListaProd(!stateListaProd)}>
            <Buscador setBuscador={setBuscador}/>
          </div>
          {
            stateListaProd && (
              <ListaGenerica scroll="scroll" data={dataproductos} setState={()=>SetstateListaProd(!stateListaProd)} funcion={selectproductos}/>
            )
          }
        </div>
        <CardProductosSelect text1={productosItemSelect.descripcion} text2={productosItemSelect.stock}/>

        <form className="formulario" onSubmit={handleSubmit(insertar)}>

            <section>
            <article>
              <InputText icono={<variables.iconocalculadora/>}>
                <input
                  className="form__field"
                  defaultValue={dataSelect.descripcion}
                  type="number"
                  placeholder=""
                  {...register("cantidad", {
                    required: true,
                  })}
                />
                <label className="form__label">Cantidad</label>
                {errors.cantidad?.type === "required" && <p>Campo requerido</p>}
              </InputText>
            </article>
            <article>
              <InputText icono={<variables.iconotodos/>}>
                <input
                  className="form__field"
                  defaultValue={dataSelect.descripcion}
                  type="text"
                  placeholder=""
                  {...register("detalle", {
                    required: true,
                  })}
                />
                <label className="form__label">Motivo</label>
                {errors.detalle?.type === "required" && <p>Campo requerido</p>}
              </InputText>
            </article>

            <div className="btnguardarContent">
              <Btnsave
                icono={<variables.iconoguardar/>}
                titulo="Guardar"
                bgcolor="#f1c40f"
              />
            </div>
          </section>
        </form>
      </div>
    </Container>
  );

}
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
    width: 500px;
    max-width: 85%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bgtotal};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 20px 36px;
    z-index: 100;

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
      section {
        gap: 20px;
        display: flex;
        flex-direction: column;
        .colorContainer {
          .colorPickerContent {
            padding-top: 15px;
            min-height: 50px;
          }
        }
      }
    }
  }
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  svg {
    font-size: 25px;
  }
  input {
    border: none;
    outline: none;
    background: transparent;
    padding: 2px;
    width: 40px;
    font-size: 28px;
  }
`;
const ContainerEmojiPicker = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;