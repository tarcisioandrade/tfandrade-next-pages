import styled from "styled-components";

type Props = {
  isActive: boolean;
};

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;
  position: relative;
  height: 100vh;
`;

export const BlurContainer = styled.div<Props>`
  width: 100%;
  height: 100%;
  filter: ${({ isActive }) => (isActive ? "blur(3px)" : "")};
`;

export const MainContainer = styled.main`
  margin-left: calc(50px + 24px + 50px);
`;
