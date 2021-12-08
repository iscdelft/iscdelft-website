import React from "react";
import Layout from "../../components/Layout";

import financialStatement from "../../img/Bookyear_2020.pdf"

const ANBI = () => (
  <Layout>
    <div className="container contain-wide-text text-bold" style={{ minHeight: "calc(100vh - 130px)"}}>
      <div className="spacer-md" />
      <p style={{ marginBottom: 30}}>
        Financial Statements:
      </p>
      <a className="link-button" target="_blank" href={financialStatement}>Boekjaar 2020 Stichting Internationaal Studenten Pastoraat</a>
    </div>
  </Layout>
);

export default ANBI;
