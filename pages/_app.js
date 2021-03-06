// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../layouts/theme";
import Layout from "../layouts/main";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
