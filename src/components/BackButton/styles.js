import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  margin: 20px 40px;

  border: none;
  background: transparent;

  font-size: 18px;
  font-weight: 600;

  color: #9758a6;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    color: #7b3f89;
    transform: translateX(-3px);
  }
`;
