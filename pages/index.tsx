import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <img src="./logo.jpg" alt="" className={styles.logo} />

        <h1>INTRODUCCION ❤</h1>
        <p>
          Bienvenido a Austral.in, la empresa líder en creación de sitios web y
          desarrollo de páginas ecommerce. Con más de 10 años de experiencia en
          la industria, hemos trabajado con una amplia variedad de clientes para
          brindar soluciones personalizadas y eficaces para sus necesidades en
          línea.
        </p>
        <p>
          En Austral.in, entendemos la importancia de tener una presencia en
          línea sólida y atractiva, y trabajamos incansablemente para brindar a
          nuestros clientes una experiencia de usuario excelente y una presencia
          en línea eficiente. Ofrecemos una amplia gama de servicios, desde la
          creación de sitios web a medida hasta el desarrollo de páginas
          ecommerce robustas.
        </p>
        <p>
          Nuestro equipo altamente capacitado de profesionales está comprometido
          a brindar resultados excepcionales a cada uno de nuestros clientes.
          Con un enfoque en la comunicación clara y una atención al detalle
          inigualable, garantizamos un proceso de creación de sitios web sin
          problemas y un producto final de alta calidad.
        </p>
        <p>
          ¡Explora nuestro sitio web para obtener más información sobre cómo
          Austral.in puede ayudarte a lograr tus objetivos en línea!
        </p>
      </main>
    </>
  );
}
