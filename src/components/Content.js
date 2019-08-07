import React from 'react'
import PropTypes from 'prop-types'

import back2 from '../img/back2.png'
import back3 from '../img/back3.png'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ children, landing }) => (
  <div
    className="landing-background"
    style={{
      backgroundImage: `URL(${landing ? back2 : back3})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top"
    }}
  >{children}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
