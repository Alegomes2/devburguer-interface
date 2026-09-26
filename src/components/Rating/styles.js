
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2px;
`;

export const StarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2px;

  border: none;
  background: transparent;

  color: #f5b301;

  cursor: pointer;

  transition:
    transform 150ms ease,
    color 150ms ease;

  &:hover {
    transform: scale(1.15);
  }

  &:focus-visible {
    outline: 2px solid #9758a6;
    outline-offset: 2px;

    border-radius: 4px;
  }
`;

