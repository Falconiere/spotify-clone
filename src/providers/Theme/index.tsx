import React from "react";
import { NativeBaseProvider } from "native-base";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <NativeBaseProvider>{children}</NativeBaseProvider>;
}
