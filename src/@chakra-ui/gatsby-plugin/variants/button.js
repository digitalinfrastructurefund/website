export const buttonVariants = {
  Button: {
    baseStyle: {
      _focus: {
        shadow: "none",
        border: "4px solid #B2E080",
      },
      _hover: {
        textDecoration: "none",
        boxShadow: "0px 12px 0px 0px #B7C2D9",
      },
      _active: {
        border: "4px solid #B7C2D9",
      },
    },
    variants: {
      primary: {
        bg: "primaryBlue",
        color: "white",
        borderRadius: "48px",
        padding: "16px 24px",
        textStyle: "buttonLabel",
        textTransform: "uppercase",
      },
      secondary: {
        bg: "white",
        color: "primaryBlue",
        borderRadius: "48px",
        padding: "16px 24px",
        textStyle: "buttonLabel",
        textTransform: "uppercase",
      },
      outline: {
        padding: "16px",
        border: "2px solid",
        borderColor: "primaryBlue",
      },
    },
  },
};
