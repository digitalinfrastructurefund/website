import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Text, Link as ChakraLink } from "@chakra-ui/react";

const MDXCustomRenderer = ({ children, page }) => {
  const H1 = (props) => (
    <Text
      textStyle={{
        base: "subHeading",
        md: page === "updates" ? "smallHeader" : "defaultHeader",
      }}
      color='primaryDarkGrey'
      {...props}
    />
  );
  const P = (props) => (
    <Text
      textStyle={{
        base: "paragraph-1",
        md: page === "updates" ? "paragraph-1" : "bigQuote",
      }}
      color='secondaryMidGray'
      {...props}
    />
  );

  const Link = (props) => (
    <Text
      as={ChakraLink}
      isExternal
      textDecoration={"underline"}
      color='primaryBlue'
      {...props}
    />
  );

  const components = {
    h1: H1,
    p: P,
    a: Link,
  };

  return (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};

export default MDXCustomRenderer;
