
import PropTypes from "prop-types";

import { useCart } from "../../hooks/CartContext";
import { CartButton } from "../CartButton";
import { Rating } from "../Rating";

import {
  Container,
  CardImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ImageContainer,
  ButtonContainer,
} from "./styles";

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  return (
    <Container>
      <ImageContainer>
        <CardImage src={product.url} alt={product.name} />
      </ImageContainer>

      <ProductInfo>
        <ProductName>{product.name}</ProductName>

        <Rating />

        <ProductPrice>{product.currencyValue}</ProductPrice>
      </ProductInfo>

      <ButtonContainer>
        <CartButton onClick={() => putProductInCart(product)} />
      </ButtonContainer>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};

