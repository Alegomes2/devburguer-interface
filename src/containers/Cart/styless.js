import styled from "styled-components";

import Background from "../../assets/background.svg";
import Texture from "../../assets/texture.svg";

export const Container = styled.div`
  width: 100%;
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url("${Background}");

  min-height: 100vh;
`;

export const Banner = styled.div`
  background: url("${Texture}");
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-size: cover;
  background-position: center;
  height: 190px;

  img {
    height: 130px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: #61a120;
  text-align: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  padding: 40px;
  margin: 0 auto;
`;
