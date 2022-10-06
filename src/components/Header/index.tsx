import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  const { asPath } = useRouter();

  console.log(asPath);

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src="/logo.svg" height="100% " width="100%" alt="DevNews" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
