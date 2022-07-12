import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default appWithTranslation(MyApp);
