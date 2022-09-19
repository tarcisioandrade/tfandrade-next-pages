import styled from "styled-components";

export const FixedSide = styled.div`
  position: fixed;
  z-index: 100;

  @media screen and (max-width:768px) {
    display: none;
  }
`;

export const SideNav = styled.nav`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 13px;

  &::after,
  ::before {
    content: "";
    display: block;
    width: 1px;
    height: calc(100vh / 2 - 122px);
    background-color: ${({ theme }) => theme.green};
  }
`;

export const SideIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.whitePrimary};
    text-decoration: none;
    font-size: ${({ theme }) => theme.DfontSm};
    font-weight: 400;
  }
`;
