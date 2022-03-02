import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import { boxVariants } from "./variants/box";
import { buttonVariants } from "./variants/button";

const breakpoints = createBreakpoints({
  xs: "320px",
  sm: "425px",
  md: "768px",
  lg: "1280px",
  xl: "2560px",
});

const theme = {
  fonts: {
    heading: "Urbanist",
    body: "Urbanist",
  },
  textStyles: {
    mainHeader: {
      fontSize: "64px",
      fontWeight: "bold",
      lineHeight: "80px",
      letterSpacing: "1px",
    },
    defaultHeader: {
      fontSize: "56px",
      fontWeight: "bold",
      lineHeight: "64px",
      letterSpacing: "1.2px",
    },
    smallHeader: {
      fontSize: "40px",
      fontWeight: "bold",
      lineHeight: "48px",
      letterSpacing: "1.2px",
    },
    subHeading: {
      fontSize: "26px",
      fontWeight: "bold",
      lineHeight: "32px",
      letterSpacing: "1px",
    },
    bigQuote: {
      fontSize: "24px",
      fontWeight: "semibold",
      lineHeight: "30px",
      letterSpacing: "1px",
    },
    "paragraph-1": {
      fontSize: "18px",
      fontWeight: "semibold",
      lineHeight: "24px",
      letterSpacing: "0.4px",
    },
    "paragraph-2": {
      fontSize: "16px",
      fontWeight: "medium",
      lineHeight: "20px",
      letterSpacing: "0.4px",
    },
    buttonLabel: {
      fontSize: "18px",
      fontWeight: "bold",
      lineHeight: "24px",
      letterSpacing: "2.4px",
    },
    smallLabel: {
      fontSize: "16px",
      fontWeight: "medium",
      lineHeight: "20px",
      letterSpacing: "1.4px",
    },
    xSmallLabel: {
      fontSize: "14px",
      fontWeight: "semibold",
      lineHeight: "17px",
      letterSpacing: "0",
    },
    inputLabel: {
      fontSize: "18px",
      fontWeight: "bold",
      lineHeight: "26px",
      letterSpacing: "normal",
    },
  },
  colors: {
    primaryDarkGrey: "#050505",
    primaryBlue: "#113275",
    primaryPaleBlue: "#B7C2D9",
    secondaryLime: "#B2E080",
    secondaryMidGray: "#55555F",
    neutralTint: "#313233",
    "neutralTint-600": "#76777A",
    "neutralTint-400": "#C4C7CC",
    subscriptionCard: "rgba(183, 194, 217, 0.6)",
    paleBox: "#D4DAE8",
    error: "#A32143",
    formLabel: "#75777A",
  },
  breakpoints,
  components: {
    ...buttonVariants,
    ...boxVariants,
  },
};

export default extendTheme(theme);
