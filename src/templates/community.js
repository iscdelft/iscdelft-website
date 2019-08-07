import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components//Layout'

import './community.sass'

const Testimony = ({ user }) => (
  <div className="testimony-container">
    <div className="testimony-info">
      <img className="author-image" src={user.photo.publicURL} alt={user.title} />
      <p className="text-bold">{user.title}</p>
    </div>
    <p>{user.testimony}</p>
  </div>
)

const Community = ({ data }) => (
    <Layout>
        <div className="container contain-wide-text text-bold blog-description">
          <div className="spacer-md" />
          <p>{data.markdownRemark.frontmatter.title}</p>
          <p style={{paddingBottom: "100px"}}>{data.markdownRemark.frontmatter.info}</p>
        </div>
        <div className="container contain-wide-text">
          {data.allMarkdownRemark.edges.map(user => <Testimony user={user.node.frontmatter} />)}
        </div>
    </Layout>
)

export default Community

export const communityPageQuery = graphql`
  query CommunityPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        info
      }
    }
    allMarkdownRemark(filter: {frontmatter: {testimony: {ne: null }}}) {
      edges {
        node {
          frontmatter {
            title
            photo {
              publicURL
            }
            testimony
          }
        }
      }
    }
  }
`