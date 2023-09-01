import styled from "styled-components";
import { TitleSec } from "../styles/HomeStyles";

export const TitleProject = styled(TitleSec)`
  margin: 0 0 36px 0;
`;

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  align-items: center;
  justify-content: center;
  padding-bottom: 48px;

  a {
    width: fit-content;
    display: block;
  }

  .project-item:hover .content {
    opacity: 1;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
