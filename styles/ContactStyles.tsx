import styled from "styled-components";
import { TitleTec } from "./HomeStyles";

export const TitleContact = styled(TitleTec)`
  margin: 0 0 36px 0;
`;

export const SubT = styled.div`
  font-size: ${({ theme }) => theme.DfontXs};
  color: ${({ theme }) => theme.whiteSecondary};
  font-weight: 200;

  @media screen and (max-width: 425px) {
    text-align: center;
    font-size: ${({ theme }) => theme.MfontXs};
  }
`;

export const FormContact = styled.form`
  margin-top: 36px;
`;

export const Label = styled.label`
  display: block;
  margin-top: 13px;
  font-size: ${({ theme }) => theme.MfontLs};
`;

export const Input = styled.input`
  display: block;
  margin-top: 13px;
  width: 100%;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.blue};
  outline: none;
  padding: 16px;
  color: ${({ theme }) => theme.whitePrimary};
  font-size: ${({ theme }) => theme.Dfont};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.green};
  }
`;

export const TextArea = styled(Input).attrs({
  as: "textarea",
})`
  height: 150px;
  resize: none;
  font-family: "Inter", sans-serif;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.green};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #35a583;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const SuccessMensage = styled(SubT)``;

export const ErrorMensage = styled.div`
  color: #ff4444;
  margin-top: 13px;
  margin-bottom: -13px;
  font-weight: 500;
`;
