import Head from "next/head";
import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import * as Styles from "../styles/ContactStyles";
import { MainContainer } from "../styles/Containers";

const Contato = () => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

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
        <title>Tarcisio | Contato</title>
      </Head>
      <Styles.TitleContact>Contato</Styles.TitleContact>

      {success && (
        <Styles.SuccessMensage>Mensagem Enviada!</Styles.SuccessMensage>
      )}

      {!success && (
        <>
          <Styles.SubT>Envie sua mensagem</Styles.SubT>
          <Styles.FormContact onSubmit={handleSubmit}>
            <Styles.Label>
              Nome
              <Styles.Input
                type="text"
                name="name"
                onChange={({ target }) => setName(target.value)}
                required
              />
            </Styles.Label>
            <Styles.Label>
              E-mail
              <Styles.Input
                type="email"
                name="email"
                onChange={({ target }) => setEmail(target.value)}
                required
              />
            </Styles.Label>

            <Styles.Label>
              Mensagem
              <Styles.TextArea
                name="message"
                onChange={({ target }) => setMessage(target.value)}
                required
              />
            </Styles.Label>
            {error && (
              <Styles.ErrorMensage>
                Falha ao enviar mensagem. Por favor, tente novamente.
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
                Enviando Mensagem{" "}
                <PaperPlaneRight size={16} color="currentColor" weight="bold" />
              </Button>
            ) : (
              <Button type="submit" style={{ marginTop: "36px" }}>
                Enviar Mensagem{" "}
                <PaperPlaneRight size={16} color="currentColor" weight="bold" />
              </Button>
            )}
          </Styles.FormContact>
        </>
      )}
    </MainContainer>
  );
};

export default Contato;
