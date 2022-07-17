import { Box } from "@chakra-ui/react";
import NextHead from "next/head";

export default function Main({ children }) {
  return (
    <Box as={"main"} minH={"100vh"}>
      <NextHead>
        <title>Chakra UI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </NextHead>
      <Box minw="100%">{children}</Box>
    </Box>
  );
}
