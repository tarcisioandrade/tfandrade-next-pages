import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { House, Browsers, EnvelopeSimple } from "phosphor-react";
import { FixedSide, SideIcons, SideNav } from "./styles";

const MenuSide = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation("common");

  return (
    <FixedSide>
      <SideNav>
        <SideIcons>
          <Link
            href="/"
            style={{ color: pathname === "/" ? "#5F88E9" : "#DFE1E5" }}
          >
            <House size={32} weight="fill" />
            {t("home")}
          </Link>
          <Link
            href="/projetos"
            style={{
              color: pathname === "/projetos" ? "#5F88E9" : "#DFE1E5",
            }}
          >
            <Browsers size={32} weight="fill" />
            {t("projects")}
          </Link>

          <Link
            href="/contato"
            style={{ color: pathname === "/contato" ? "#5F88E9" : "#DFE1E5" }}
          >
            <EnvelopeSimple size={32} weight="fill" />
            {t("contact")}
          </Link>
        </SideIcons>
      </SideNav>
    </FixedSide>
  );
};

export default MenuSide;
