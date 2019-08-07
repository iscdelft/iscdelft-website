import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import SplitTitle from "../../components/SplitTitle";
import Search from '../../components/Search'

const LinkDisplay = ({ link }) => (
  <div className="link-container">
    <a href={link.title.includes('https://') ? link.title : `https://${link.title}`} target="__blank" className="text-bold">
      {link.title}
    </a>
    <p className="text-bold">{link.description}</p>
  </div>
);

class UsefulLinks extends React.Component {
  state = {
    search: ''
  }

  render() {
    const links = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div
          className="container contain-wide-text"
          style={{ marginBottom: "400px" }}
        >
          <div className="spacer" />
          <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <SplitTitle title="Useful links" />
            <Search title="Search links" action={(term) => this.setState({ search: term })} />
          </div>
          {links.filter(link => {
            if(this.state.search === '') {
              return true
            }
            return link.node.frontmatter.title.includes(this.state.search) || link.node.frontmatter.description.includes(this.state.search)
          }).map(link => (
            <LinkDisplay link={link.node.frontmatter} />
          ))}
        </div>
      </Layout>
    );
  }
}

export default UsefulLinks;

export const UsefullinksPageQuery = graphql`
  query UsefulLinksQuery {
    allMarkdownRemark(
      filter: { frontmatter: { findKey: { eq: "usefullinks" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;
