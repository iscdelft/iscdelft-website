import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "./blog-post.sass";

// Images
import facebook from "../img/social/fb_black.svg";
import twitter from "../img/social/tw_black.svg";
import SplitTitle from "../components/SplitTitle";

export const BlogPreview = ({ post }) => {
  return <div className="blog__preview-container">
    <p className="blog__preview-title">{post.frontmatter.title}</p>
    <p className="blog__preview-excerpt">{post.excerpt} <a href={`http://localhost:8000${post.fields.slug}`}>Read more</a></p>
    <div className="blog__detailed-author" style={{margin: "20px 0px"}}>
      <img className="author-image inline" src={post.fields.author.frontmatter.photo.publicURL} alt={post.fields.author.frontmatter.title} />
      <p className="inline text-bold keep-margin details-smaller">{post.fields.author.frontmatter.title}</p>
      <p className="inline text-bold keep-margin details-smaller">{post.timeToRead} mins read</p>
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
  html
}) => {
  const twitterShare = `https://twitter.com/intent/tweet?url=#url&text=${title}&via=iscdelft&hashtags=${tags.join(",")}`;

  const facebookShare = `http://www.facebook.com/sharer/sharer.php?u=#url&t=${title}`
  return (
      <div className="container is-fluid">
        <div className="spacer" />
        <div className="blog__detailed-container">
          <img src={image} alt={title} />
          <p className="blog__detailed-title">{title}</p>
          <div>
            {tags &&
              tags.map(tag => <div className="blog__detailed-tag">{tag}</div>)}
          </div>
          <div className="blog__detailed-meta">
            <div className="blog__detailed-author">
              <img
                className="author-image inline"
                src={author.frontmatter.photo.publicURL}
                alt={author.frontmatter.title}
              />
              <p className="inline">{author.frontmatter.title}</p>
            </div>
            <p>{time} mins read</p>
            <p>{date}</p>
          </div>
          <div className="blog__detailed-description" dangerouslySetInnerHTML={{__html: html}} />
          <div className="blog__detailed-share">
            <p>Share:</p>
            <a class="twitter__share-button" target="__blank" href={twitterShare}>
              <img src={twitter} alt="twitter" />
            </a>
            <a class="facebook__share-button" target="__blank" href={facebookShare}>
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
        image={data.markdownRemark.frontmatter.featuredimage.publicURL}
        author={data.markdownRemark.fields.author}
        tags={data.markdownRemark.frontmatter.tags}
        date={data.markdownRemark.frontmatter.date}
        time={data.markdownRemark.timeToRead}
        similar={data.markdownRemark.fields.author.fields.posts}
        html={data.markdownRemark.html}
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
