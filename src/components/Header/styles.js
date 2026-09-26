
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 72px;

  background: #333;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  padding: 0 56px;

  display: flex;
  align-items: center;

  position: relative;
  z-index: 10;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const HeaderLink = styled(Link)`
  position: relative;

  color: ${({ $isActive }) => ($isActive ? "#9758a6" : "#ffffff")};

  text-decoration: none;

  font-size: 17px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};

  padding: 8px 2px;

  transition:
    color 200ms ease,
    transform 200ms ease;

  &::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: 0;

    width: ${({ $isActive }) => ($isActive ? "100%" : "0")};
    height: 2px;

    background: #9758a6;

    border-radius: 10px;

    transition: width 200ms ease;
  }

  &:hover {
    color: #b978c8;

    &::after {
      width: 100%;
    }
  }
`;

export const Divider = styled.span`
  width: 1px;
  height: 24px;

  background: rgba(255, 255, 255, 0.2);
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  color: #ffffff;

  svg {
    color: #b978c8;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3px;

  p {
    margin: 0;

    color: #ffffff;

    font-size: 14px;
    font-weight: 400;

    white-space: nowrap;
  }

  span {
    color: #b978c8;

    font-weight: 700;
  }
`;

export const Logout = styled.button`
  width: fit-content;

  padding: 0;

  border: none;
  background: transparent;

  color: #ff6b6b;

  font-size: 12px;
  font-weight: 600;

  cursor: pointer;

  transition:
    color 200ms ease,
    transform 200ms ease;

  &:hover {
    color: #ff8585;

    transform: translateX(2px);
  }

  &:focus-visible {
    outline: 2px solid #9758a6;
    outline-offset: 3px;
  }
`;

export const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 9px;

  padding: 9px 14px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;

  color: #ffffff;

  text-decoration: none;

  font-size: 15px;
  font-weight: 500;

  background: rgba(255, 255, 255, 0.04);

  transition:
    background 200ms ease,
    border-color 200ms ease,
    transform 200ms ease;

  svg {
    color: #b978c8;
  }

  &:hover {
    background: rgba(151, 88, 166, 0.15);

    border-color: rgba(151, 88, 166, 0.4);

    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

