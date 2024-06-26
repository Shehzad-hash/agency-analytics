import React from "react";
import Image from "next/image";
import img1 from "../../public/img1.png";
const Hero = () => {
  return (
    <div>
      <div className="heroSection topPadding pb-5">
        <div className="container">
          <div className="col-lg-11 mx-auto">
            <div className="heroText">
              <h1 className="mainHeading">Know someone with a Hangar?</h1>
              <p className="mainParagrhp">
                Send them a referral link to get signed-up with Hangar Direct,
                and you can both earn!
              </p>
            </div>
          </div>
          <div className="col-lg-6 mx-auto">
            <div className="heroImg my-auto">
              <Image
                src={img1}
                className="imgeOne"
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
