import styled from "styled-components";
import { Btnsave, variables, useAuthStore, InputText, FooterLogin } from "../../index";
import { Device } from "../../styles/breackpoints";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import carrito from "../../assets/carrito.svg";
import { MdOutlineInfo, MdEmail, MdLock } from "react-icons/md";
import { ThemeContext } from "../../App";

export function LoginTemplate() {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);
  const { signInWithEmail } = useAuthStore();
  const [state, setState] = useState(false);
  const [stateInicio, setStateInicio] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function iniciar(data) {
    const response = await signInWithEmail({
      correo: data.correo,
      pass: data.pass,
    });
    if (response) {
      navigate("/");
    } else {
      setStateInicio(true);
    }
  }

  return (
    <Container>
      <div className="contentLogo">
        <img src={variables.hogar} alt="logo" style={{ filter: "brightness(0) saturate(100%) invert(100%)" }} />
        <span>Cigarra.Net</span>
      </div>
      <div className="bannerlateral">
        <img src={carrito} alt="carrito" />
      </div>

      <div className="contentCard">
        <div className="card">
          <Titulo>Cigarra.Net</Titulo>
          <p className="frase">Controla tu inventario.</p>
          {stateInicio && <TextoStateInicio>Datos incorrectos</TextoStateInicio>}

          <form onSubmit={handleSubmit(iniciar)}>
            <InputText icono={<MdEmail />}>
              <input
                className="form__field"
                type="text"
                placeholder="email"
                {...register("correo", {
                  required: true,
                })}
              />
              <label className="form__label">email</label>
            </InputText>
            <InputText icono={<MdLock />}>
              <input
                className="form__field"
                type="password"
                placeholder="contraseña"
                {...register("pass", {
                  required: true,
                })}
              />
              <label className="form__label">Contraseña</label>
              {errors.pass?.type === "required" && <p>Campo requerido</p>}
            </InputText>
            <ContainerBtn>
              <Btnsave titulo="Iniciar" bgcolor="#f1c40f" />
              <Btnsave
                funcion={() => setState(!state)}
                titulo="Crear cuenta"
                bgcolor="#ffffff"
              />
            </ContainerBtn>
          </form>
        </div>
        <FooterLogin />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-size: cover;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #262626;
  @media ${Device.tablet} {
    grid-template-columns: 1fr 2fr;
  }
  .contentLogo {
    position: absolute;
    top: 15px;
    font-weight: 700;
    display: flex;
    left: 15px;
    align-items: center;
    color: #fff;

    img {
      width: 50px;
    }
  }
  .bannerlateral {
    background-color: #;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80%;
    }
  }
  .contentCard {
    grid-column: 2;
    background-color: #ffffff;
    background-size: cover;
    z-index: 100;
    position: relative;
    gap: 30px;
    display: flex;
    padding: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
    justify-content: center;
    width: auto;
    height: 100%;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    .card {
      padding-top: 80px;
      width: 100%;
      @media ${Device.laptop} {
        width: 50%;
      }
    }
    .version {
      color: #727272;
      text-align: start;
    }
    .frase {
      color: #f1c40f;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 30px;
    }
  }
`;

const Titulo = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const TextoStateInicio = styled.p`
  color: #fc7575;
`;