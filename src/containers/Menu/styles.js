import styled from "styled-components";


import Background from "../../assets/backgroundblack.svg";
import BannerCardapio from "../../assets/bannerCardapio.svg";

export const Container = styled.div`
  width: 100%;
  background-color: #f0f0f0f0;
  min-height: 100vh;
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("${Background}");
`;

export const Banner = styled.div`
  background: url("${BannerCardapio}"), no-repeat;
  background-position: center;
  background-color: #1f1f1f1;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 100%;
  position: relative;

  h1 {
    font-family: "Road Rage", sans-serif;
    font-size: 80px;
    line-height: 60px;
    color: #ffff;
    position: absolute;

    right: 7%;
    top: 30%;

    span {
      display: block;
      color: #ffff;
      font-size: 20px;
    }
  }
`;

export const CategoryMenu = styled.div`
        display: flex;
        justify-content: center;
        gap: 50px;
        margin-top: 30px;

`;

export const CategoryButton = styled.button`
  width: 150px;
  height: 50px;

  border: 1px solid rgba(151, 88, 166, 0.35);
  border-radius: 12px;

  background-color: #ffffff;

  color: #9758a6;

  font-size: 17px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow:
    0 0 8px rgba(151, 88, 166, 0.25),
    0 5px 15px rgba(151, 88, 166, 0.2);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);

    border-color: rgba(151, 88, 166, 0.7);

    box-shadow:
      0 0 12px rgba(151, 88, 166, 0.45),
      0 8px 20px rgba(151, 88, 166, 0.3);
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto;
  gap: 60px;
`;
