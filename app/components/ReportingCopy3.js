import React from 'react'
import Image from "next/image";
import img8 from "../../public/IMAGE8.png";

function ReportingCopy3() {
    return (
        <div>
            <div className="heroCopySection">
                <div className="heroSection heroCopy ">
                    <div className="container">  
                                <div className="col-lg-9 mx-auto">
                                    <div className="heroText">
                                        <p className="mainParagrhp">
                                            Join the many hangar owners we are proud to feature on our platform already!
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mx-auto">
                                    <div className="heroImg my-auto">
                                        <Image
                                            src={img8}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                </div>
                            </div>  
                </div>
            </div>
        </div>
    )
}

export default ReportingCopy3