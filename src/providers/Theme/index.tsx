import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#121212",
    },
    secondary: {
      50: "#65d46e",
    },
  },
  components: {
    Text: {
      baseStyle: () => ({
        color: "white",
      }),
    },
  },
});
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
}
