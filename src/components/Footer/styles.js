
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;

  min-height: 80px;

  display: flex;
  align-items: center;

  padding: 16px 56px;

  background: #333333;

  border-top: 1px solid rgba(151, 88, 166, 0.25);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;

  p {
    margin: 0;

    color: rgba(255, 255, 255, 0.7);

    font-size: 13px;
    font-weight: 400;

    line-height: 20px;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    justify-content: center;

    text-align: center;

    gap: 12px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const SocialLink = styled.a`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;

  color: #ffffff;

  text-decoration: none;

  background: rgba(255, 255, 255, 0.04);

  transition:
    color 200ms ease,
    background 200ms ease,
    border-color 200ms ease,
    transform 200ms ease;

  &:hover {
    color: #ffffff;

    background: #9758a6;

    border-color: #9758a6;

    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #b978c8;
    outline-offset: 3px;
  }

`;