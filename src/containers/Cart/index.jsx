import Logo from "../../assets/Logo.svg";
import { Container, Banner, Title, Content } from "./styless";

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="" />
      </Banner>

      <Title>Checkout - Pedido</Title>

      <Content></Content>
    </Container>
  );
}
