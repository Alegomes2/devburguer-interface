
import { useNavigate, useResolvedPath } from "react-router-dom";
import { UserCircle, ShoppingCart } from "@phosphor-icons/react";

import { useUser } from "../../hooks/UserContext";

import {
  Container,
  Content,
  Navigation,
  HeaderLink,
  Options,
  Logout,
  Profile,
  ProfileInfo,
  CartLink,
  Divider,
} from "./styles";

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();
  const { logout, userInfo } = useUser();

  function logoutUser() {
    logout();
    navigate("/login");
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <HeaderLink to="/" $isActive={pathname === "/"}>
            Home
          </HeaderLink>

          <Divider />

          <HeaderLink
            to="/cardapio"
            $isActive={pathname === "/cardapio"}
          >
            Cardápio
          </HeaderLink>
        </Navigation>

        <Options>
          <Profile>
            <UserCircle size={28} weight="duotone" />

            <ProfileInfo>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>

              <Logout onClick={logoutUser}>Sair</Logout>
            </ProfileInfo>
          </Profile>

          <CartLink to="/carrinho">
            <ShoppingCart size={25} weight="bold" />

            <span>Carrinho</span>
          </CartLink>
        </Options>
      </Content>
    </Container>
  );
}

