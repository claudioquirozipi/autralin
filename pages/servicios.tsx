import Head from "next/head";

import { Layout } from "@/components/layout";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>SERVICIOS</h1>
        <p>
          En Austral.in ofrecemos una amplia gama de servicios para ayudar a
          nuestros clientes a lograr sus objetivos en línea. Aquí hay una
          descripción detallada de cada uno de nuestros servicios:
        </p>
        <p>
          Creación de tiendas virtuales: Ofrecemos soluciones personalizadas
          para la creación de tiendas virtuales que se ajustan a las necesidades
          únicas de nuestros clientes. Nuestras tiendas virtuales son fáciles de
          usar, atractivas y seguras, y están diseñadas para maximizar las
          ventas y la satisfacción del cliente.
        </p>
        <p>
          Carritos de compra: Proporcionamos carritos de compra robustos y
          seguros para nuestras tiendas virtuales. Nuestros carritos de compra
          son fáciles de usar y ofrecen una experiencia de compra suave y sin
          problemas para los clientes.
        </p>
        <p>
          Landig Pages: Ofrecemos la creación de páginas de destino atractivas y
          efectivas que ayudan a nuestros clientes a convertir a los visitantes
          en clientes potenciales. Nuestras páginas de destino son optimizadas
          para el rendimiento y se ajustan a las necesidades de cada cliente.
        </p>
        <p>
          Estrategia de Marketing: Ofrecemos una amplia gama de servicios de
          marketing, incluido el SEO, el marketing por correo electrónico, el
          marketing en las redes sociales y la publicidad en línea para ayudar a
          nuestros clientes a aumentar su visibilidad en línea.
        </p>
        <p>
          Gestión de dominios: Ofrecemos soluciones de gestión de dominios
          fáciles y eficientes para ayudar a nuestros clientes a mantener el
          control y la propiedad de sus nombres de dominio.
        </p>

        <p>
          En Austral.in, nos comprometemos a brindar a nuestros clientes
          soluciones en línea excepcionales y eficaces. ¡Póngase en contacto con
          nosotros hoy mismo para obtener más información sobre cómo podemos
          ayudarlo a lograr sus objetivos en línea!
        </p>
      </main>
    </Layout>
  );
}
