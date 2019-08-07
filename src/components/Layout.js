import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#6f89e4"
        />
        <link rel="manifest" href={`${withPrefix("/")}config/site.webmanifest`} />

        <meta name="theme-color" content="#6f89e4" />

        <meta property="og:type" content="organisation" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/favicon-32x32.png`} />
      </Helmet>
      <Navbar />
      <div className="side-text">
        <div />
        <div>
          <p>INTERNATIONAL</p>
          <p>STUDENT CHAPLAINCY</p>
        </div>
      </div>
      <Content>{children}</Content>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
