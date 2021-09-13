import "@fontsource/urbanist";
import * as React from "react";
import Footer from "./Footer";

import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <title>Homepage</title>
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  </>
);

export default Layout;
