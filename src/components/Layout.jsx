import "@fontsource/urbanist";
import * as React from "react";
import { Helmet } from "react-helmet";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ title, children, activePage }) => (
  <>
    <Helmet>
      <title>
        {title ? `${title} | ` : ""} Digital • Infrastructure • Fund
      </title>
    </Helmet>
    <main>
      <Header activePage={activePage} />
      {children}
      <Footer />
    </main>
  </>
);

Layout.defaultProps = {
  title: "Digital • Infrastructure • Fund",
};

export default Layout;
