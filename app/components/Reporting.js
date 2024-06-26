import React from "react";
import Image from "next/image";
import img4 from "../../public/IMAGE4.png";

const Reporting = () => {
  return (
    <div>
      <div className="heroCopySection">
        <div className="heroSection heroCopy py-5 ">
          <div className="container">
            <div className="col-lg-8 mx-auto">
              <div className="heroText">
                <p className="mainParagrhp">
                  Just title the hangar, add a description and location, list
                  your amenities, and add photos.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mx-auto mt-3">
              <div className="heroImg my-auto">
                <Image
                  className="imageFour"
                  src={img4}
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

export default Reporting;
