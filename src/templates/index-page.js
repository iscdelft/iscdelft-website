import React from 'react'
import { graphql, Link } from 'gatsby'

import BlogRoll from '../components/BlogRoll'
import Layout from '../components/Layout'
import SplitTitle from '../components/SplitTitle'
import svgmorph from '../img/svgmorph.svg'
import './index.sass'

export const IndexPageTemplate = ({
  title
}) => (
  <div>
    {title}
  </div>
)

const Card = ({ title, children }) => (
  <div className="landing-card">
    <p className="text-bold">{title}</p>
    <div className="divider" />
    {children}
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout landing={true}>
      <section className="landing-cover" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div
          className="landing-svg"
          style={{
            backgroundImage: `URL(${svgmorph})`,
            backgroundRepeat: "no-repeat"
          }} 
        />
        <p style={{
          fontSize: "2em",
          paddingBottom: "50px",
          textAlign: "center",
          fontWeight: "600"
        }}>HOME AWAY<br />FROM HOME</p>
        <div className="landing-svg-mobile" />
        <article>
          We hope everyone is safe and well. Since we cannot have any public gatherings we thought we would bring the Sunday service to you. Join us in our online services every Sunday 11:30am (CET) via the link below. (First and third Sunday Catholic service and second and fourth protestant)
          <br />
          <br />
          <a href="https://vcr-001-bbb.aperture-labs.org/b/els-ezf-tk7">https://vcr-001-bbb.aperture-labs.org/b/els-ezf-tk7</a>
          <br />
          <br />
          - The ISC committee
        </article>
      </section>
      <section className="container contain-wide-text landing-general-info">
        <p>
        Coming into a new place to start a new adventure is as exciting as it is nerve-wrecking. Every one of us came to this lovely city of Delft with a specific purpose, yet we still hope to enjoy life on the side, making the best of each day we have in this city.</p>

        <p>We gladly welcome you to ISC, to make the best of the days together in Delft! We are a group of happy people, mostly students, who love God and love people.</p>

        <p>Our purpose is to create a loving community that international students can call second home while being away from their first home. Through our Sunday services and various activities, we bring students together, celebrate diversity, and strive to create peace by being in peace with ourselves and the people around us.</p>
      </section>
      <div className="card-scroll">
        <Card title="Daily Bible Reading">
          <p>{frontmatter.bibleReading}</p>
        </Card>
        <Card title="Useful links">
          {data.allMarkdownRemark.edges.map(link => <a key={link.node.frontmatter.title} href={link.node.frontmatter.title.includes('https://') ? link.node.frontmatter.title : `https://${link.node.frontmatter.title}`} target="__blank" className="index-links">{link.node.frontmatter.title}</a>)}
          <Link style={{paddingTop: "20px"}} className="link-button" to="/usefullinks">See more ...</Link>
        </Card>
        <Card title="Song of the week">
        <iframe title="song of the week" width="560" height="315"
          src={`https://www.youtube-nocookie.com/embed/${frontmatter.songOfTheWeek.split("?v=")[1]}`} frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture" allowFullScreen></iframe>
        </Card>
      </div>
      <div style={{display: "flex", justifyContent: "center", marginTop: "100px"}}>
        <SplitTitle title="Recent Articles" />
      </div>
      <BlogRoll />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        bibleReading
        songOfTheWeek
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { findKey: { eq: "usefullinks" } } }, limit: 5
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
