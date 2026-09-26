
import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 0 16px;

  border: none;
  border-radius: 9px;

  background: #9758a6;
  color: #ffffff;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 200ms ease,
    transform 150ms ease,
    box-shadow 200ms ease;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background: #7f438d;

    box-shadow: 0 6px 14px rgba(151, 88, 166, 0.25);

    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);

    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid #9758a6;
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;

    transform: none;
    box-shadow: none;
  }
`;

