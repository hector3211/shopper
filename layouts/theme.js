import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
const shadows = {
  first: "1px  1px 20px 1px black",
};
const colors = {
  primary: "#E94560",
};
const styles = {
  global: (props) => ({
    body: {
      bg: mode("#FCF8E8", "#363062")(props),
    },
  }),
};
const theme = extendTheme({ config, shadows, colors, styles });

export default theme;
