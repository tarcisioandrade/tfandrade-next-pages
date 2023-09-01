import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.whitePrimary};
  padding: 16px 23px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.MfontLs};
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  background-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.whitePrimary};
  padding: 16px 23px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.MfontLs};
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 425px) {
    margin: 0 auto;
  }
`;
