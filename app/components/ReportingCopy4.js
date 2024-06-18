import React from "react";
import Image from "next/image";
import img9 from "../../public/IMAGE9.png";

const ReportingCopy4 = () => {
  return (
    <div>
      <div className="heroCopySection">
        <div className="heroSection ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="heroText">
                  <p className="mainParagrhp">
                    Click the link to get signed-up as an affiliate, so you can
                    share your referral link and start earning!
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="heroImg my-auto">
                  <Image src={img9} alt="Picture of the author" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportingCopy4;
