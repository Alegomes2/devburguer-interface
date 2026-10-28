
import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // Salva os produtos do carrinho no navegador
  const updateLocalStorage = (products) => {
    localStorage.setItem("devburguer:cartInfo", JSON.stringify(products));
  };

  // Adiciona um produto ao carrinho
  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex(
      (prd) => prd.id === product.id
    );

    let newProductInCart = [];

    if (cartIndex >= 0) {
      // Produto já existe: aumenta a quantidade sem alterar o estado original
      newProductInCart = cartProducts.map((prd) =>
        prd.id === product.id
          ? { ...prd, quantity: prd.quantity + 1 }
          : prd
      );
    } else {
      // Produto novo: adiciona com quantidade inicial igual a 1
      const newProduct = {
        ...product,
        quantity: 1,
      };

      newProductInCart = [...cartProducts, newProduct];
    }

    setCartProducts(newProductInCart);
    updateLocalStorage(newProductInCart);
  };

  // Limpa todos os produtos do carrinho
  const clearCart = () => {
    setCartProducts([]);
    updateLocalStorage([]);
  };

  // Exclui completamente um produto do carrinho
  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter(
      (prd) => prd.id !== productId
    );

    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  // Aumenta a quantidade de um produto
  const addProduct = (productId) => {
    const newCart = cartProducts.map((prd) =>
      prd.id === productId
        ? { ...prd, quantity: prd.quantity + 1 }
        : prd
    );

    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  // Diminui a quantidade de um produto
  const removeProduct = (productId) => {
    const product = cartProducts.find(
      (prd) => prd.id === productId
    );

    if (!product) return;

    if (product.quantity > 1) {
      const newCart = cartProducts.map((prd) =>
        prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : prd
      );

      setCartProducts(newCart);
      updateLocalStorage(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  // Recupera o carrinho salvo quando a aplicação inicia
  useEffect(() => {
    const clientCartData = localStorage.getItem("devburguer:cartInfo");

    if (clientCartData) {
      try {
        const savedProducts = JSON.parse(clientCartData);

        if (Array.isArray(savedProducts)) {
          setCartProducts(savedProducts);
        }
      } catch (error) {
        console.error("Erro ao recuperar o carrinho:", error);
        localStorage.removeItem("devburguer:cartInfo");
      }
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        clearCart,
        deleteProduct,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart deve ser utilizado dentro do CartProvider");
  }

  return context;
};
