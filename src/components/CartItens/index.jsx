import TrashIcon from "../../assets/trash.svg";
import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { Table } from "../index";
import {
  ProductImage,
  EmptyCart,
  ButtonGroup,
  TotalPrice,
  TrashImage,
} from "./styles";

export function CartItens() {
  const { cartProducts, removeProduct, addProduct, deleteProduct } = useCart();

  console.log("CART PRODUCTS:", cartProducts);

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>

      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} />
              </Table.Td>

              <Table.Td>{product.name}</Table.Td>

              <Table.Td>{product.currencyValue}</Table.Td>

              <Table.Td>
                <ButtonGroup>
                  <button onClick={() => removeProduct(product.id)}>-</button>

                  <span>{product.quantity}</span>

                  <button onClick={() => addProduct(product.id)}>+</button>
                </ButtonGroup>
              </Table.Td>

              <Table.Td>
                <TotalPrice>
                  {formatPrice(product.quantity * product.price)}
                </TotalPrice>
              </Table.Td>

              <Table.Td>
                <TrashImage
                  src={TrashIcon}
                  alt="Lixeira"
                  onClick={() => removeProduct(product.id)}
                />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <Table.Tr>
            <Table.Td colSpan={5}>
              <EmptyCart>Carrinho vazio</EmptyCart>
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Body>
    </Table.Root>
  );
}
