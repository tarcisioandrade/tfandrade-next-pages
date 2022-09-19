import styled from "styled-components";

export const Button = styled.button`
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

  svg {
    margin-left: 8px;
    vertical-align: middle;
  }
`;

export const ButtonLink = styled.a`
  display: block;
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

  svg {
    margin-left: 8px;
  }

  @media screen and (max-width: 425px) {
    margin: 0 auto;
  }
`;
