import styled from "styled-components";

export const HeaderFlex = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 3px solid ${({ theme }) => theme.green};
  margin-right: 56px;
  overflow: hidden;
  position: relative;
  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  
  @media screen and (max-width: 425px) {
    margin-right: 0;
  }
`;

export const Name = styled.strong`
  font-size: ${({ theme }) => theme.DfontXs};
  font-weight: 400;

  @media screen and (max-width: 425px) {
    display: block;
    font-size: ${({ theme }) => theme.MfontXs};
    margin-top: 10px;
  }
`;

export const SubTitle = styled.div`
  color: ${({ theme }) => theme.whiteSecondary};
  font-size: ${({ theme }) => theme.DfontLs};
  margin: 10px 0;
  font-weight: 200;

  @media screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.MfontLs};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 22px;

  & a:hover svg path {
    transition: fill 0.3s ease;
    fill: ${({ theme }) => theme.green};
  }

  @media screen and (max-width: 425px) {
    justify-content: center;
  }
`;

export const Intro = styled.p`
  color: ${({ theme }) => theme.whiteSecondary};
  line-height: ${({ theme }) => theme.lineHeigth};
  font-size: ${({ theme }) => theme.Dfont};
  margin: 34px 0;
  max-width: 650px;

  @media screen and (max-width: 425px) {
    text-align: center;
  }
`;

export const TitleTec = styled.div`
  color: ${({ theme }) => theme.whitePrimary};
  font-size: ${({ theme }) => theme.DfontLs};
  margin: 50px 0;

  @media screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.MfontXs};
    text-align: center;
  }
`;

export const ContainerTecs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: fit-content;

  @media screen and (max-width: 425px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 3rem;
  }
`;
