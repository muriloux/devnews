import Image from "next/image";
import { SEO } from "../components/SEO";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <SEO title="Dev News!" excludeTitleSuffix />
      <main className={styles.content}>
        <section className={styles.section}>
          <span>Olá dev!</span>
          <h1>
            Bem-vindo <br />
            ao
            <span> Dev</span>News!
          </h1>
          <p>
            Um blog com conteúdos extremamente <br />
            <span>relevantes para seu aprendizado</span>
          </p>
        </section>
        <Image
          src="/home.svg"
          alt="Home image"
          width={"300rem"}
          height={"300rem"}
        />
      </main>
    </>
  );
}
