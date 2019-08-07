import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/Layout";
import Search from "../../components/Search";

import "./blog.sass";

const Article = ({ article }) => (
  <div>
    <p className="text-bold article-header">{article.frontmatter.title}</p>
    <p>{article.excerpt} <Link className="link-button" to={article.fields.slug}>Read more</Link></p>
    <div className="article-info">
      <img className="author-image" src={article.fields.author.frontmatter.photo.publicURL} alt="" />
      <p className="text-bold">{article.fields.author.frontmatter.title}</p>
      <p>{article.timeToRead} mins read</p>
    </div>
  </div>
)

export default class BlogIndexPage extends React.Component {
  state = {
    search: "",
    entries: 1,
    perPage: 9
  };

  render() {
    const articles = this.props.data.allMarkdownRemark.edges
    const { entries, perPage } = this.state
    return (
      <Layout>
        <div className="container contain-wide-text text-bold blog-description">
          <div className="spacer-md" />
          <p>
            Our community is ever changing. There are always fresh faces. The
            newcomers in Delft mostly need information on using their time more
            efficiently and access to critical information. We provide some
            information here so that your stay is a little bit more comfortable.
          </p>

          <p>
            If you want to contribute towards growing this resource page{" "}
            <Link className="link-button" to="/contact">contact us</Link>.{" "}
          </p>
        </div>
        <div className="spacer" />
        <div className="container contain-wide-text center-children">
          <Search
            title="Search articles"
            action={term => this.setState({ search: term })}
          />
        </div>
        <div className="container article-roll">
          {articles.filter(article => {
            if(this.state.search === '') {
              return true
            }
            return (
              article.node.frontmatter.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
              article.node.fields.author.frontmatter.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
              article.node.internal.content.toLowerCase().includes(this.state.search.toLowerCase()) ||
              article.node.frontmatter.tags.join(" ").toLowerCase().includes(this.state.search.toLowerCase())
            )
          }).slice(0, entries*perPage).map(article => <Article key={article.node.fields.slug} article={article.node} />)}
        </div>
        {(entries*perPage < articles.length) && <div className="show-more"><button className="text-bold" onClick={()=> this.setState(prevState => ({ entries: prevState.entries + 1 }))}>Show more</button></div>}
      </Layout>
    );
  }
}

export const BlogPageQuery = graphql`
  query BlogLinksQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
          }
          internal {
            content
          }
          excerpt(pruneLength: 300)
          timeToRead
          fields {
            slug
            author {
              frontmatter {
                title
                photo {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  }
`;
