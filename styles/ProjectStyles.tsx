import styled from "styled-components";
import { TitleTec } from "../styles/HomeStyles";

export const TitleProject = styled(TitleTec)`
  margin: 0 0 36px 0;
`;

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  align-items: center;
  justify-content: center;

  a {
    width: fit-content;
    display: block;
  }

  a:hover .content {
    opacity: 1;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
