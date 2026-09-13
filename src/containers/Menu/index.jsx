import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CardProduct } from "../../components/CardProduct";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import {
  Container,
  Banner,
  CategoryMenu,
  ProductsContainer,
  CategoryButton,
} from "./styles";

export function Menu() {
  // Guarda todas as categorias recebidas da API.
  const [categories, setCategories] = useState([]);

  // Guarda todos os produtos recebidos da API.
  const [products, setProducts] = useState([]);

  // Guarda somente os produtos que devem aparecer na tela.
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Hook do React Router usado para alterar a URL através do código.
  const navigate = useNavigate();

  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  // Guarda a categoria que está atualmente selecionada.
  // O valor 0 representa "Todas".
  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get("categoria");

    if (categoryId) {
      return categoryId;
    }
    return 0;
  });

  // Executa quando o componente é carregado.
  useEffect(() => {
    async function loadCategories() {
      // Faz uma requisição para buscar as categorias.
      const { data } = await api.get("/categories");

      // Adiciona "Todas" no começo da lista de categorias.
      const newCategories = [{ id: 0, name: "Todas" }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      // Busca os produtos na API.
      const { data } = await api.get("/products");

      // Formata o preço de cada produto.
      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  // Sempre que os produtos ou a categoria ativa mudarem,
  // esse efeito será executado novamente.
  useEffect(() => {
    // Se a categoria for 0, significa que "Todas" está selecionada.
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      // Caso contrário, mostra somente os produtos
      // pertencentes à categoria selecionada.
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      );
      console.log("Produtos filtrados:", newFilteredProducts);
      setFilteredProducts(newFilteredProducts);
    }
  }, [products, activeCategory]);

  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBURGUER
          <br />
          ESTÁ AQUI
          <span>Esse cardápio esta irresistível!</span>
        </h1>
      </Banner>

      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              // Atualiza a categoria selecionada.
              setActiveCategory(category.id);

              // Atualiza a URL.
              navigate(
                {
                  pathname: "/cardapio",
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
              );
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
