import { CategoriesCarousel, OfferCarousel } from "../../components";
import { Container, Banner, Content } from "./styles";

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a)!</h1>
      </Banner>
      <Container>
        <Content>
          <CategoriesCarousel />
          <OfferCarousel />
        </Content>
      </Container>
    </main>
  );
}
