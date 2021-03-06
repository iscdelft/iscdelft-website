import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix, graphql } from "gatsby"

const TemplateWrapper = ({ children, landing }) => {
  const { title, description, keywords } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="ISC Delft" />
        <meta name="keywords" content={keywords.join(",")} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png?v=2`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png?v=2`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png?v=2`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg?v=2`}
          color="#6f89e4"
        />
        <link rel="manifest" href={`${withPrefix("/")}config/site.webmanifest`} />

        <meta name="theme-color" content="#6f89e4" />

        <meta property="og:type" content="organisation" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/favicon-32x32.png?v=2`} />
      </Helmet>
      <Navbar />
      <div className="side-text">
        <div />
        <div>
          <p>INTERNATIONAL</p>
          <p>STUDENT CHAPLAINCY</p>
        </div>
      </div>
      <Content landing={landing}>{children}</Content>
      <Footer />
    </div>
  )
}

export const communityPageQuery = graphql`
  query KeywordPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        info
      }
    }
  }
`;

export default TemplateWrapper
