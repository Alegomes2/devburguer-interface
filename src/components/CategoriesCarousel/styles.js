import styled from "styled-components";

export const Container = styled.div`
  .carousel-item {
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 800;
  color: #9758a6;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #9758a6;
    left: calc(50% - 28px);
  }
`;

export const ContainerItens = styled.div`
  background: url("${(props) => props.$imageUrl}");
  background-position: center;
  background-size: cover;

  border-radius: 16px;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  padding: 12px;

  width: 100%;
  height: 160px;
`;

export const CategoryButton = styled.button`
  color: #ffffff;

  background-color: rgba(0, 0, 0, 0.55);

  padding: 7px 18px;

  border-radius: 25px;

  font-size: 16px;
  font-weight: 500;

  margin: 0;

  &:hover {
    background-color: #9758a6;
  }
`;
