import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Text } from "@chakra-ui/react";

const MDXCustomRenderer = ({ children }) => {
  const H1 = (props) => (
    <Text
      textStyle={{ base: "subHeading", md: "defaultHeader" }}
      color='primaryDarkGrey'
      {...props}
    />
  );
  const P = (props) => (
    <Text
      textStyle={{ base: "paragraph-1", md: "bigQuote" }}
      color='secondaryMidGray'
      {...props}
    />
  );

  const components = {
    h1: H1,
    p: P,
  };

  return (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};

export default MDXCustomRenderer;
