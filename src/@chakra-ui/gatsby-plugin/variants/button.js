export const buttonVariants = {
  Button: {
    baseStyle: {
      _focus: {
        shadow: "none",
      },
      _hover: {
        textDecoration: "none",
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
