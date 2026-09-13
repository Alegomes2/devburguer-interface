import { useEffect, useState } from "react";
import * as MultiCarouselModule from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { api } from "../../services/api";
import { Container, Title, ContainerItens } from "./styles";

const Carousel =
  MultiCarouselModule.default?.default ||
  MultiCarouselModule.default ||
  MultiCarouselModule.Carousel;

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get("/categories");

      setCategories(response.data);

      console.log(response.data);
    }

    loadCategories();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },

    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Container>
      <Title>Categorias</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        itemClass="carousel-item"
      >
        {categories.map((category) => (
          <ContainerItens key={category.id} $imageUrl={category.url}>
            <p>{category.name}</p>
          </ContainerItens>
        ))}
      </Carousel>
    </Container>
  );
}
