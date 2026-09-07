import styled from "styled-components";

import Background from "../../assets/backgroundblack.svg";
import BannerHome from "../../assets/banner-home.svg";

export const Banner = styled.div`
  background: url("${BannerHome}");
  background-size: cover;
  background-position: center;
  height: 480px;

  h1 {
    font-family: "Google Sans Flex", sans-serif;
    font-size: 80px;
    color: #ffffff;
    position: absolute;
    top: 10%;
    right: 20%;
  }
`;

export const Container = styled.section`
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("${Background}");
  height: 500px;
`;

export const Content = styled.div`
  padding-bottom: 70px;
`;
