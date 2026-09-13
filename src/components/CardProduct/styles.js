import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 300px;

  padding: 20px;

  border-radius: 16px;
  background-color: #fff;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);

  cursor: grab;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }

  div {
    width: 100%;
    height: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    gap: 10px;

    p {
      margin: 0;

      font-size: 18px;
      color: #363636;
      line-height: 22px;
      font-weight: 700;

      text-align: center;
    }

    strong {
      font-size: 23px;
      color: #61a120;
      font-weight: 800;
      line-height: 24px;
    }
  }
`;

export const CardImage = styled.img`
  width: 160px;
  height: 130px;

  object-fit: contain;

  margin-bottom: 10px;
`;
