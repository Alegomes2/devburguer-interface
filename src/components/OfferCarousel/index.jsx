import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../CardProduct";
import { Container, Title, Track } from "./styles";

export function OfferCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get("/products");

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => ({
          currencyValue: formatPrice(product.price),
          ...product,
        }));

      setOffers(onlyOffers);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <Title>
        <span>🔥</span> Ofertas do dia
      </Title>

      <Track>
        {[...offers, ...offers].map((product, index) => (
          <CardProduct key={`${product.id}-${index}`} product={product} />
        ))}
      </Track>
    </Container>
  );
}
