import React from "react";
import Image from "next/image";
import img5 from "../../public/IMAGE5.png";

const ReportingCopy = () => {
  return (
    <div>
      <div className="reportingCopySection">
        <div className="heroSection py-5 ">
          <div className="container">
            <div className="col-lg-6">
              <div className="heroText">
                <h1 className="mainHeading">You set the terms.</h1>
              </div>
            </div>
            <div className="col-lg-5 mx-auto">
              <div className="heroImg my-auto">
                <Image
                  className="imageFive"
                  src={img5}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportingCopy;
