import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
  Link,
} from "./styles";

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required("O nome é obrigatório"),
      email: yup.string().email().required("O e-mail é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Digite uma senha"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas devem ser iguais")
        .required("Confirme sua senha"),
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
    try {
      const { status } = await api.post(
        "/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        toast.success("Conta criada com sucesso!");
      } else if (status === 409) {
        toast.error("E-mail já cadastrado! Faça login para continuar.");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Falha no sistema! Tente novamente.");
    }
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
          Já possui conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </RigthContainer>
    </Container>
  );
}
