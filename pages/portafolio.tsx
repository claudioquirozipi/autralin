import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img src="./logo.jpg" alt="" className={styles.logo} />
        <div className={styles.text}>
          <h1>Portafolio</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus sequi odio sed deserunt possimus et rerum optio
            consequuntur unde nostrum, accusamus dolorum inventore repudiandae
            excepturi, eius officiis ipsum. Suscipit, quibusdam?
          </p>
        </div>
      </main>
    </>
  );
}