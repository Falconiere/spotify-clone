import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { NativeBaseProvider, extendTheme } from "native-base";

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

const theme = extendTheme({
  colors: {
    primary: {
      50: "#121212",
      100: "#2c2c2c",
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
    Heading: {
      baseStyle: () => ({
        color: "white",
      }),
    },
  },
});
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NativeBaseProvider theme={theme} config={config}>
      {children}
    </NativeBaseProvider>
  );
}
