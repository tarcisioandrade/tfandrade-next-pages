import React, { useState } from "react";
import { Globe } from "phosphor-react";
import * as S from "./styled";
import { useRouter } from "next/router";
import OutsideClickHandler from "react-outside-click-handler";

const AlterLanguage = () => {
  const [modalShow, setModalShow] = useState(false);
  const { pathname, locale } = useRouter();

  const handleModal = () => {
    setModalShow((prev) => !prev);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={closeModal}>
      <S.BWrapper>
        <S.ModalLanguange show={modalShow}>
          {locale === "pt" ? (
            <S.LanguageItem href={`${pathname}`} locale={"en"}>
              English (US)
            </S.LanguageItem>
          ) : (
            <S.LanguageItem href={`/pt${pathname}`} locale={"pt"}>
              Português (Brasil)
            </S.LanguageItem>
          )}
        </S.ModalLanguange>
        <S.BLanguageContainer>
          <Globe size={24} onClick={handleModal} />
        </S.BLanguageContainer>
      </S.BWrapper>
    </OutsideClickHandler>
  );
};

export default AlterLanguage;
