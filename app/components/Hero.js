import React from "react";
import Image from "next/image";
import img1 from "../../public/img1.png";
const Hero = () => {
  return (
    <div>
      <div className="heroSection">
        <div className="container">  
              <div className="col-lg-8 mx-auto ">
                <div className="heroText">
                  <h1 className="mainHeading">Know someone with a Hangar?</h1>
                  <p className="mainParagrhp">
                    Send them a referral link to get signed-up with Hangar
                    Direct, and you can both earn!
                  </p> 
                </div>
              </div>
              <div className="col-lg-5 mx-auto">
                <div className="heroImg my-auto">
                  <Image
                    src={img1} 
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
