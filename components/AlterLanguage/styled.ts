import Link from "next/link";
import styled from "styled-components";

type ModalProps = {
  show: boolean;
};

export const BWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const BLanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.slate800};
  width: 40px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.slate700};
  }
`;

export const ModalLanguange = styled.div<ModalProps>`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  gap: 12px;
  position: absolute;
  top: 40px;
  right: 0px;
  border-radius: 4px;
  padding: 12px;
  min-width: 190px;
  background-color: ${({ theme }) => theme.slate800};
`;

export const LanguageItem = styled(Link)`
  padding: 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.whitePrimary};
  text-decoration: none;
  &:hover {
    background-color: #334155;
  }
`;
