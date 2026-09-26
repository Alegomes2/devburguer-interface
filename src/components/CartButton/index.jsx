
import { ShoppingCart } from "@phosphor-icons/react";

import { ContainerButton } from "./styles";

export function CartButton({ ...props }) {
  return (
    <ContainerButton {...props}>
      <ShoppingCart size={21} weight="bold" />

      <span>Adicionar ao carrinho</span>
    </ContainerButton>
  );
}

