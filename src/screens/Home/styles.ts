import { IBoxProps } from "native-base";

export const gradientBoxBg: IBoxProps["bg"] = {
  linearGradient: {
    colors: ["gray.600", "gray.700", "primary.50"],
    start: [0, 0.25],
    end: [0.5, 1.0],
    // @ts-ignore
    locations: [0, 0.25, 0.5],
  },
};
