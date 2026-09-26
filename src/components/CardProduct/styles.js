
import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 320px;

  padding: 18px;

  background: #fffeff;

  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 18px;

  box-shadow: 0 4px 14px rgba(236, 84, 229, 0.4);

  cursor: grab;

  transition:
    transform 200ms ease,
    box-shadow 200ms ease,
    border-color 200ms ease;

  &:hover {
    transform: translateY(-9px);

    border-color: rgba(143, 47, 167, 0.25);

    box-shadow: 0 12px 30px rgba(203, 62, 216, 0.12);
  }

  &:active {
    cursor: grabbing;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 155px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;

  overflow: hidden;

  border-radius: 14px;

  background: #f8f8f8;

  transition: background 200ms ease;

  ${Container}:hover & {
    background: #f5eef7;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;

  max-width: 190px;

  object-fit: contain;

  transition:
    transform 250ms ease,
    filter 250ms ease;

  ${Container}:hover & {
    transform: scale(1.06);
  }
`;

export const ProductInfo = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 7px;

  padding: 8px 4px 12px;
`;

export const ProductName = styled.p`
  width: 100%;

  margin: 0;

  color: #303030;

  font-size: 17px;
  font-weight: 700;
  line-height: 22px;

  text-align: center;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
`;

export const ProductPrice = styled.strong`
  color: #61a120;

  font-size: 22px;
  font-weight: 800;
  line-height: 26px;
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-top: auto;
`;

