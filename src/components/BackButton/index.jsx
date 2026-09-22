import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export function BackButton() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return <Container onClick={handleBack}>← Voltar</Container>;
}
