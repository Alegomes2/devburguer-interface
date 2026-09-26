import Logo from "../../assets/Logo.svg";
import { CartItens, CartResume } from "../../components";
import { Container, Banner, Title, Content } from "./styless";

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="" />
      </Banner>

      <Title>Checkout - Pedido</Title>

      <Content>
        <CartItens />
        <CartResume />
      </Content>
    </Container>
  );
}
