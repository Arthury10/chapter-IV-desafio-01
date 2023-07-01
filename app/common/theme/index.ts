import { extendTheme, Theme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const theme = extendTheme({
  colors: {
    ...colors,
  },
  fonts,
  styles: {
    global: {
      body: {
        bg: "white",
        color: "secondary",
      },
    },
  },
} as Theme | {});
