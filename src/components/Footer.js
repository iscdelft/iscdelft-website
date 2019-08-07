import React from 'react'

import facebook from '../img/social/facebook.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="footer-social">
          <a href="https://www.facebook.com/iscdelft" target="__blank"><img src={facebook} alt="facebook" /></a>
          <a href="https://twitter.com/iscdelft" target="__blank"><img src={twitter} alt="twitter" /></a>
        </div>
        <p className="footer-copyright"><span style={{color: "rgba(0,0,0,0.5)", marginRight: "5px"}}>Copyright © 2019</span> ISC Delft</p>
      </footer>
    )
  }
}

export default Footer
