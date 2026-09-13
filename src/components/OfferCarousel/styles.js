import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
`;

export const Container = styled.div`
  overflow-x: hidden;
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: 900;
  text-align: center;

  margin-top: 70px;
  margin-bottom: 40px;

  position: relative;

  background: linear-gradient(
    90deg,
    #61a120 20%,
    #b7e87a 40%,
    #ffffff 50%,
    #b7e87a 60%,
    #61a120 80%
  );

  background-size: 200% auto;
  background-position: 0% center;

  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

  animation: shine 3s linear infinite;

  span {
    color: initial;
    background: none;
    -webkit-background-clip: initial;
    background-clip: initial;
  }

  &::after {
    content: "";

    position: absolute;

    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);

    width: 90px;
    height: 4px;

    border-radius: 10px;

    background-color: #61a120;
  }

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

export const Track = styled.div`
  display: flex;
  width: max-content;
  gap: 40px;

  animation: ${slide} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  & > div {
    width: 280px;
    min-width: 280px;
  }
`;
