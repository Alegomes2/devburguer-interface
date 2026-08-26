import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Logo from "../../assets/Logo.svg";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import {
  Container,
  Form,
  LeftContainer,
  Title,
  RigthContainer,
  ImputContainer,
} from "./styles";

export function Login() {
  const schema = yup
    .object({
      email: yup.string().email().required("O e-mail é válido"),
      password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Digite uma senha"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post("/session", {
        email: data.email,
        password: data.password,
      }),

      {
        pending: "Verificando seus dados",
        success: "Seja bem-vindo(a)",
        error: "Email ou Senha incorretos",
      },
    );

    console.log(response);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo devburguer" />
      </LeftContainer>

      <RigthContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br /> Acesse com seu<span>Login e senha</span>.
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <ImputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </ImputContainer>

          <ImputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </ImputContainer>

          <Button type="submit">Entrar</Button>
        </Form>

        <p>
          Não possui conta? <a>Clique aqui.</a>
        </p>
      </RigthContainer>
    </Container>
  );
}
