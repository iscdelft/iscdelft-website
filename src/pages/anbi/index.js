import React from "react";
import Layout from "../../components/Layout";

import financialStatement1 from "../../img/Bookyear_2020.pdf"
import financialStatement2 from "../../img/Bookyear_2021.pdf"
import financialStatement3 from "../../img/Bookyear_2022.pdf"

const ANBI = () => (
  <Layout>
    <div className="container contain-wide-text text-bold" style={{ minHeight: "calc(100vh - 130px)"}}>
      <div className="spacer-md" />
      <p style={{ marginBottom: 30}}>
        Financial Statements:
      </p>
      <a className="link-button" target="_blank" href={financialStatement1}>Boekjaar 2020 Stichting Internationaal Studenten Pastoraat</a>
      <a className="link-button" target="_blank" href={financialStatement2}>Boekjaar 2021 Stichting Internationaal Studenten Pastoraat</a>
      <a className="link-button" target="_blank" href={financialStatement3}>Boekjaar 2022 Stichting Internationaal Studenten Pastoraat</a>
    </div>
  </Layout>
);

export default ANBI;
