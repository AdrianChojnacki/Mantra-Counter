import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    palette: {
      blue: "#00235b",
      red: "#e21818",
      orange: "#feb139",
      yellow: "#fff80a",
    },
  },
  styles: {
    global: {
      body: {
        // bg: "var(--chakra-colors-palette-blue)",
      },
    },
  },
});
