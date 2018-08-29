import React from "react";

import styled from "react-emotion";

const Partners = () => (
  <PartnersDiv>
    <h4>Our Partners</h4>
    <div>
      <a href="http://www.nato.int/" target="_blank" rel="noopener noreferrer">
        <img src="./images/partners/img08.gif" alt="nato" />
      </a>
      <a
        href="http://http://www.un.org/en/index.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./images/partners/img12.png" alt="United Nations" />
      </a>
      <a href="http://www.wfp.org/" target="_blank" rel="noopener noreferrer">
        <img src="./images/partners/img14.png" alt="World Food Programme" />
      </a>
      <a href="http://www.au.int/" target="_blank" rel="noopener noreferrer">
        <img src="./images/partners/img09.png" alt="Afrikan Union" />
      </a>
      <a
        href="http://www.defense.gov/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="./images/partners/img07.png"
          alt="Departament of defense USA"
        />
      </a>
      <a
        href="http://portal.www.gov.qa/wps/portal/directory/agency/ministryofdefence"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./images/partners/img10.png" alt="ministryofdefence" />
      </a>
      <a
        href="http://www.cat.com/en_GB.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./images/partners/img04.png" alt="Caterpillar" />
      </a>
      <a
        href="http://www.waviationgroup.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./images/partners//img01.png" alt="waviationgroup" />
      </a>
      <a
        href="http://bastaholdings.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./images/partners/img02.png" alt="bastaholdings" />
      </a>
      <a
        href="http://monarchairgroup.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="./images/partners/img03.png"
          style={{ width: 400, padding: "0 20px" }}
          alt="Monarch Air Group"
        />
      </a>
      <a
        href="http://www.uz.gov.ua/en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./images/partners/img06.png" alt="UZ" />
      </a>
      <a
        href="http://www.ukroboronprom.com.ua/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./images/partners/img11.png" alt="ukroboronprom" />
      </a>
      <a
        href="http://spetstechnoexport.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./images/partners/img13.png" alt="spetstechnoexport" />
      </a>
    </div>
  </PartnersDiv>
);

export default Partners;

const PartnersDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 3%;
  & > h4 {
    font-size: 1.5em;
    color: #dd693d;
  }
  & > div > a > img {
    margin: 20px 20px;
    width: 200px;
    height: 200px;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
