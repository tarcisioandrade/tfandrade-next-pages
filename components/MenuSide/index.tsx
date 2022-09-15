import Link from "next/link";
import { useRouter } from "next/router";
import { House, Browsers, EnvelopeSimple } from "phosphor-react";
import { FixedSide, SideIcons, SideNav } from "./styles";

const MenuSide = () => {
  const { pathname } = useRouter();

  return (
    <FixedSide>
      <SideNav>
        <SideIcons>
          <Link href="/">
            <a style={{ color: pathname === "/" ? "#5F88E9" : "#DFE1E5" }}>
              <House size={32} weight="fill" />
              Home
            </a>
          </Link>
          <Link href="/projetos">
            <a
              style={{
                color: pathname === "/projetos" ? "#5F88E9" : "#DFE1E5",
              }}
            >
              <Browsers size={32} weight="fill" />
              Projetos
            </a>
          </Link>

          <Link href="/contato">
            <a
              style={{ color: pathname === "/contato" ? "#5F88E9" : "#DFE1E5" }}
            >
              <EnvelopeSimple size={32} weight="fill" />
              Contato
            </a>
          </Link>
        </SideIcons>
      </SideNav>
    </FixedSide>
  );
};

export default MenuSide;
