import "../styles/globals.css";
import "../styles/swiper.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import Header from "../components/header";
import Footer from "../components/footer";
import { Body } from "./styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />

      <Body>
        <Component {...pageProps} />
      </Body>

      <Footer />
    </div>
  );
}

export default appWithTranslation(MyApp);
