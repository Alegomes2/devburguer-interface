import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Container, Banner, Content } from "./styles";
import { OfferCarousel } from "../../components/OfferCarousel";

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
