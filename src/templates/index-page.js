import React from 'react'

import Layout from '../components/Layout'
import logo from '../img/logo.svg'

export const IndexPageTemplate = () => (
  <div style={{
    display: "flex",
    height: "100vh",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <img
      src={logo}
      alt="ISC Delft"
      style={{ width: '20em', height: '20em' }}
    />
  </div>
)

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

export default IndexPage
