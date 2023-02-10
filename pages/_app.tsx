import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "primereact/resources/themes/vela-orange/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
