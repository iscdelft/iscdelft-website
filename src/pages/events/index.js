import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import SplitTitle from '../../components/SplitTitle';

import './events.sass'

export default class EventIndexPage extends React.Component {
  render() {
    const { activities, events } = this.props.data
    return (
      <Layout>
        <div className="container contain-wide-text text-bold">
          <div className="spacer-md" />
          <p>Throughout the year we have many events planned.</p>

          <div className="spacer" />
          {activities.edges.map(activity => (
            <div className="events-container">
              <p className="text-bold events-title">{activity.node.frontmatter.title}</p>
              <p className="events-description">{activity.node.frontmatter.qdescription}</p>
              {activity.node.frontmatter.venue && <p className="events-description events-meta">Venue: {activity.node.frontmatter.venue}</p>}
              {activity.node.frontmatter.day && <p className="events-description events-meta">Day: {activity.node.frontmatter.day}</p>}
              {activity.node.frontmatter.time && <p className="events-description events-meta">Time: {activity.node.frontmatter.time}</p>}
            </div>
          ))}
          <div style={{display: "flex", justifyContent: "center", margin: "30px 0px"}}>
            <SplitTitle title="Upcoming Events" />
          </div>
          {events.edges.filter(event => new Date() < new Date(event.node.frontmatter.date)).map(event => (
            <div>
              <p className="text-bold events-title">{event.node.frontmatter.title}</p>
              <p className="events-description">{event.node.frontmatter.qdescription}</p>
              {event.node.frontmatter.venue && <p className="events-description events-meta">Venue: {event.node.frontmatter.venue}</p>}
              {event.node.frontmatter.date && <p className="events-description events-meta">Date: {event.node.frontmatter.date}</p>}
              {event.node.frontmatter.starttime && <p className="events-description events-meta">Time: <span>{event.node.frontmatter.starttime}</span>{event.node.frontmatter.endtime && <span> - {event.node.frontmatter.endtime}</span>}</p>}
            </div>
          ))}
          <div className="spacer" />
        </div>
      </Layout>
    )
  }
}

export const eventsPageQuery = graphql`
  query EventsQuery {
    activities: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "activity"}}}) {
      edges {
        node {
          internal {
            content
          }
          frontmatter {
            title
            day
            time
            venue 
            qdescription
          }
          fields {
            slug
          }
        }
      }
    }
    events: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "event"}, date: {gte: ""}}}, sort: {order: ASC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            starttime
            endtime
            venue 
            qdescription
          }
          fields {
            slug
          }
        }
      }
    }
  }
`