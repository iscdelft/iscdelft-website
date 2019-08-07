import React from 'react'
import PropTypes from 'prop-types'

import background from '../img/background.png'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ className, children }) => (
  <div
    className={className}
    style={{
      backgroundImage: `URL(${background})`,
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
