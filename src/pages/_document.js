import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@src/styles/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Aca pueden configurar toda la metadata de la web */}
        <meta content="website" property="og:type" />
        <meta content="Esta es la description principal de la web" name="description" />
        <meta content="DAN - Example" property="og:title" />
      </Head>
      <body>
        {/* Make Color mode to persists when you refresh the page. */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
