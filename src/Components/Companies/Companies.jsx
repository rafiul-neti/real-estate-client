import React from "react";
import company1 from "../../assets/equinix.png";
import company2 from "../../assets/prologis.png";
import company3 from "../../assets/realty.png";
import company4 from "../../assets/tower.png";

const Companies = () => {
  return (
    <>
      <img src={company1} className="w-36" alt="" />
      <img src={company2} className="w-36" alt="" />
      <img src={company3} className="w-36" alt="" />
      <img src={company4} className="w-36" alt="" />
    </>
  );
};

export default Companies;
