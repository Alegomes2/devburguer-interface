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

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required("O nome é obrigatório"),
      email: yup.string().email().required("O e-mail é válido"),
      password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Digite uma senha"),
      confirmPassword: yup.string().oneOf([yup.ref("password")], "A senhas devem ser iguais")
        .required("Confirma sua senha"),
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
      api.post("/users", {
        name: data.name,
        email: data.email,
        password: data.password,
      }),

      {
        pending: "Verificando seus dados",
        success: "Cadastro efetuado com sucesso!",
        error: "Ops, algo deu errado! Tente novamente",
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
        <Title>Criar conta</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <ImputContainer>
            <label>Nome</label>
            <input type="text" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </ImputContainer>

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

          <ImputContainer>
            <label>Confirmar senha</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </ImputContainer>

          <Button type="submit">Criar conta</Button>
        </Form>

        <p>
          Já possui conta? <a>Clique aqui.</a>
        </p>
      </RigthContainer>
    </Container>
  );
}
