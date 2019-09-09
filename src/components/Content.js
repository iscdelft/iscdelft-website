import React from 'react'
import PropTypes from 'prop-types'

import back from "../img/jupiter.jpg"

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ children, landing }) => (
  <div
    className="landing-background"
    style={{
      backgroundImage: `URL(${back})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right top"
    }}
  >{children}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
