import "@fontsource/urbanist";
import * as React from "react";
import { Helmet } from "react-helmet";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ title, children }) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  </>
);

Layout.defaultProps = {
  title: "Digital • Infrastructure • Fund",
};

export default Layout;
