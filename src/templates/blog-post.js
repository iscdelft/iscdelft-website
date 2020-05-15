import React from "react";
import { graphql } from "gatsby";
import { Helmet } from 'react-helmet'

import Img from 'gatsby-image'
import Layout from "../components/Layout";
import "./blog-post.sass";

// Images
import facebook from "../img/social/fb_black.svg";
import twitter from "../img/social/tw_black.svg";
import SplitTitle from "../components/SplitTitle";

export const BlogPreview = ({ post }) => {
  return <div className="blog__preview-container">
    <p className="blog__preview-title">{post.frontmatter.title}</p>
    <p className="blog__preview-excerpt">{post.excerpt} <a href={`https://www.iscdelft.nl${post.fields.slug}`}>Read more</a></p>
    <div className="blog__detailed-author" style={{margin: "20px 0px"}}>
      <img className="author-image inline" src={post.fields.author.frontmatter.photo.publicURL} alt={post.fields.author.frontmatter.title} />
      <p className="inline text-bold keep-margin details-smaller">{post.fields.author.frontmatter.title}</p>
      <p className="inline text-bold keep-margin details-smaller">{post.timeToRead} min read</p>
    </div>
  </div>
}

export const BlogPostTemplate = ({
  id,
  title,
  tags,
  date,
  image,
  author,
  time,
  similar,
  html,
  slug
}) => {
  const twitterShare = `https://twitter.com/intent/tweet?url=https://www.iscdelft.nl${slug}&text=${title}&via=iscdelft&hashtags=${tags && tags.join(",")}`;

  const facebookShare = `http://www.facebook.com/sharer/sharer.php?u=#url&t=${title}`

  const keywords = `${tags && tags.join(",")},${title}`

  return (
      <div className="container is-fluid">
        <Helmet>
          <meta name="keywords" content={keywords} />
        </Helmet>
        <div className="spacer-md" />
        <div className="blog__detailed-container">
          <Img className="post-featured-image" sizes={image} />
          <p className="blog__detailed-title">{title}</p>
          <div>
            {tags &&
              tags.map(tag => <div className="blog__detailed-tag">{tag}</div>)}
          </div>
          <div className="blog__detailed-meta">
            <div className="blog__detailed-author">
              <img
                style={{
                  marginRight: "10px"
                }}
                className="author-image inline"
                src={author.frontmatter.photo.publicURL}
                alt={author.frontmatter.title}
              />
              <p className="inline">{author.frontmatter.title}</p>
            </div>
            <p>{time} min read</p>
            <p>{date}</p>
          </div>
          <div className="blog__detailed-description" dangerouslySetInnerHTML={{__html: html}} />
          <div className="blog__detailed-share">
            <p>Share:</p>
            <a className="twitter__share-button" target="__blank" href={twitterShare}>
              <img src={twitter} alt="twitter" />
            </a>
            <a className="facebook__share-button" target="__blank" href={facebookShare}>
              <img src={facebook} alt="facebook" />
            </a>
          </div>
          {similar.length > 1 && <SplitTitle title="Similar Articles" />}
          <div className="blog__preview-wrapper container">
            {similar.filter(post => {
              return id !== post.id
            }).slice(0, 3).map(post => <BlogPreview post={post} />)}
          </div>
        </div>
      </div>
  );
};

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <BlogPostTemplate
        id={data.markdownRemark.id}
        title={data.markdownRemark.frontmatter.title}
        image={data.markdownRemark.frontmatter.featuredimage && data.markdownRemark.frontmatter.featuredimage.childImageSharp.sizes}
        author={data.markdownRemark.fields.author}
        tags={data.markdownRemark.frontmatter.tags}
        date={data.markdownRemark.frontmatter.date}
        time={data.markdownRemark.timeToRead}
        similar={data.markdownRemark.fields.author.fields.posts}
        html={data.markdownRemark.html}
        slug={data.markdownRemark.fields.slug}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      internal {
        description
        ignoreType
        mediaType
      }
      fields {
        slug
      }
      frontmatter {
        tags
        date(formatString: "D MMMM, YYYY")
        featuredimage {
          publicURL
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        title
      }
      timeToRead
      html
      fields {
        author {
          fields {
            posts {
              id
              timeToRead
              excerpt(pruneLength: 200)
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
              frontmatter {
                title
                date(formatString: "D MMMM, YYYY")
              }
            }
          }
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
`;
