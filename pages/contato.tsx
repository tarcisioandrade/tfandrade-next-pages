import Head from "next/head";
import * as Styles from "../styles/ContactStyles";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { MainContainer } from "../styles/Containers";

const Contato = () => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { t } = useTranslation("common");

  const title = `Tarcisio | ${t("contactTitle")}`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("https://formspree.io/f/xoqberer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error("Falha ao enviar mensagem.");
      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <Head>
        <title>{title}</title>
      </Head>
      <Styles.TitleContact>{t("contactTitle")}</Styles.TitleContact>

      {success ? (
        <Styles.SuccessMensage>{t("form.messageSended")}</Styles.SuccessMensage>
      ) : (
        <>
          <Styles.SubT> {t("contactSubTitle")}</Styles.SubT>
          <Styles.FormContact onSubmit={handleSubmit}>
            <Styles.Label>
              {t("form.name")}
              <Styles.Input
                type="text"
                name="name"
                onChange={({ target }) => setName(target.value)}
                required
              />
            </Styles.Label>
            <Styles.Label>
              {t("form.email")}
              <Styles.Input
                type="email"
                name="email"
                onChange={({ target }) => setEmail(target.value)}
                required
              />
            </Styles.Label>

            <Styles.Label>
              {t("form.message")}
              <Styles.TextArea
                name="message"
                onChange={({ target }) => setMessage(target.value)}
                required
              />
            </Styles.Label>
            {error && (
              <Styles.ErrorMensage>
                {t("form.messageError")}
              </Styles.ErrorMensage>
            )}
            {loading ? (
              <Button
                type="submit"
                style={{
                  marginTop: "36px",
                  pointerEvents: "none",
                  opacity: ".7",
                }}
                disabled={true}
              >
                {t("form.buttonSending")}
                <PaperPlaneRight size={24} color="currentColor" weight="bold" />
              </Button>
            ) : (
              <Button type="submit" style={{ marginTop: "36px" }}>
                {t("form.button")}
                <PaperPlaneRight size={24} color="currentColor" weight="bold" />
              </Button>
            )}
          </Styles.FormContact>
        </>
      )}
    </MainContainer>
  );
};

export default Contato;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
