import { ChakraProvider } from "@chakra-ui/react";
import theme from "@src/styles/theme";
import DefaultLayout from "@src/layout/DefaultLayout";
import SafeSuspense from "@src/components/SafeSuspense";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  // Magia explicada ->  https://nextjs.org/docs/basic-features/layouts
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <ChakraProvider theme={theme}>
      <div className={inter.className}>
        <SafeSuspense>{getLayout(<Component {...pageProps} />)}</SafeSuspense>
      </div>
    </ChakraProvider>
  );
}
