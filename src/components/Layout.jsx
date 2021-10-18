import "@fontsource/urbanist";
import * as React from "react";
import { Helmet } from "react-helmet";

import Footer from "./Footer";
import Header from "./Header";

import digitalInfrastructureIllustrationMd from "../images/digital-infrastructure-md.png";

const Layout = ({ title, children, activePage }) => (
  <>
    <Helmet>
      <title>
        {title ? `${title} | ` : ""} Digital Infrastructure Research and
        Development
      </title>
      <meta
        name='title'
        content='Digital Infrastructure
      Research and Development'
      />
      <meta
        name='description'
        content='Creating a sustainable future for the technology that powers our world'
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://digitalinfrastrcuture.fund/' />
      <meta
        property='og:title'
        content='Digital Infrastructure
      Research and Development'
      />
      <meta
        property='og:description'
        content='Creating a sustainable future for the technology that powers our world'
      />
      <meta property='og:image' content={digitalInfrastructureIllustrationMd} />

      {/* <!-- Twitter --> */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta
        property='twitter:url'
        content='https://digitalinfrastrcuture.fund/'
      />
      <meta
        property='twitter:title'
        content='Digital Infrastructure
      Research and Development'
      />
      <meta
        property='twitter:description'
        content='Creating a sustainable future for the technology that powers our world'
      />
      <meta
        property='twitter:image'
        content={digitalInfrastructureIllustrationMd}
      ></meta>
    </Helmet>
    <main>
      <Header activePage={activePage} />
      {children}
      <Footer />
    </main>
  </>
);

Layout.defaultProps = {
  title: "Digital Infrastructure Research and Development",
};

export default Layout;
