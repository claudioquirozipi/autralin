import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Layout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img src="./logo.jpg" alt="" className={styles.logo} />
        <div className={styles.text}>
          <h1>Blogs</h1>
          <p>
            Hola Soy Robert
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic
            molestias ipsa vel, reprehenderit commodi, ratione harum doloribus
            perferendis corrupti quis incidunt adipisci quaerat totam voluptate
            numquam facere? Ipsa, veniam?
          </p>
        </div>
      </main>
    </Layout>
  );
}
