import React from "react";
import Layout from "../../components/Layout";

import './contact.sass'

import raamstraat from '../../img/maps/raamstraat.png'
import voorstraat from '../../img/maps/voorstraat.png'

const Contact = () => (
  <Layout>
    <div className="container contain-wide-text text-bold">
      <div className="spacer-md" />
      <p style={{ margin: "20px" }}>
        If you have any questions contact us at{" "}
        <a className="link-button" href="mailto:iscdelft@gmail.com">iscdelft@gmail.com</a>
      </p>
      <p style={{ margin: "20px" }}>
        More information is also available in our{" "}
        <a className="link-button" href="https://www.facebook.com/iscdelft" target="__blank">facebook page</a>.
      </p>

      <div className="contact-get-there">
        <div className="contact-address">
          <p>Our Sunday services are at 11:30 in the morning</p>
          <p>Raamstraat 8</p>
          <p>Delft</p>
        </div>
        <a href="https://www.google.com/maps/place/Raamstraat+8,+2613+SC+Delft/@52.0065548,4.3528904,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5b5c0cc59782d:0x20c7730917f5d3cc!8m2!3d52.0065515!4d4.3550791" target="__blank" alt="raamstraat 8" style={{
            backgroundImage: `url(${raamstraat})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            maxWidth: "800px",
            height: "300px"
        }}>.</a>
        <div className="contact-address">
          <p>The activities that we have are normally at the following address:</p>
          <p>Voorstraat 60</p>
          <p>Delft</p>
        </div>
        <a href="https://www.google.com/maps/place/Voorstraat+60,+2611+JS+Delft/@52.0146124,4.3532954,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5b5c4a50631f1:0xba3a17421f31b0b4!8m2!3d52.0146091!4d4.3554841" target="__blank" alt="voorstraat 60" style={{
            backgroundImage: `url(${voorstraat})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            maxWidth: "800px",
            height: "300px"
        }}>.</a>
      </div>
    </div>
  </Layout>
);

export default Contact;
