import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import "../pages/blog/blog.sass";

const Article = ({ article }) => (
  <div>
    <p className="text-bold article-header">{article.frontmatter.title}</p>
    <p style={{paddingLeft: "20px"}}>
      {article.excerpt}{" "}
      <Link className="link-button" to={article.fields.slug}>
        Read more
      </Link>
    </p>
    <div className="article-info">
      <img
        className="author-image"
        src={article.fields.author.frontmatter.photo.publicURL}
        alt=""
      />
      <p className="text-bold">{article.fields.author.frontmatter.title}</p>
      <p>{article.timeToRead} mins read</p>
    </div>
  </div>
);

const BlogRoll = () => (
  <StaticQuery
    query={graphql`
      query BlogIndexQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          limit: 6
        ) {
          edges {
            node {
              frontmatter {
                title
                tags
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
    `}
    render={data => (
      <div className="container article-roll">
        {data.allMarkdownRemark.edges.map(article => (
          <Article key={article.node.fields.slug} article={article.node} />
        ))}
        <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
          <Link to="/blog">Read more...</Link>
        </div>
      </div>
    )}
  />
);

export default BlogRoll;
