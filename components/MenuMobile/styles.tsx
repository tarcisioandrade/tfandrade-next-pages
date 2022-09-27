import styled from "styled-components";

type Props = {
  isOpen: boolean;
};

export const MenuMobileContainer = styled.div<Props>`
  display: flex;
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? "0" : "-124px")};
  top: 15%;
  z-index: 150;
  transition: left 0.3s ease;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const MenuMobileContent = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  width: 124px;
  padding: 14px 0;
  background-color: ${({ theme }) => theme.blue};

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    font-size: ${({ theme }) => theme.DfontSm};

  }
`;

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  margin-left: -3px;
  height: 47px;
  background-color: ${({ theme }) => theme.blue};
  border-radius: 0 4px 4px 0;
`;
