import styled from "styled-components";

export const Project = styled.div`
  position: relative;
  width: fit-content;
  border-radius: ${({ theme }) => theme.borderRadiusXS};
  overflow: hidden;
`;

export const Image = styled.div`
  position: relative;
  img {
    display: block;
    width: 400px;
    height: 270px;
  }
`;

export const Content = styled.div`
  display: flex;
  opacity: 0;
  transition: opacity 0.3s ease;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0e1428ae;

  @media screen and (max-width: 425px) {
    opacity: 1;
  }
`;

export const Icon = styled.div`
  display: flex;
  gap: 16px;
  width: fit-content;
  position: absolute;
  top: 24px;
  right: 24px;

  & a {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  padding: 24px;
`;

export const Name = styled.strong`
  font-size: ${({ theme }) => theme.MfontXs};
  font-weight: 400;
  color: ${({ theme }) => theme.whitePrimary};

  @media screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.Mfont};
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Tag = styled.span`
  color: ${({ theme }) => theme.green};
  font-size: ${({ theme }) => theme.DfontSm};
`;
