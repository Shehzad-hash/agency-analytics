import React from 'react'
import Image from "next/image";
import img6 from "../../public/IMAGE6.png";

const ReportingAnotherCopy = () => {
    return (
        <div>
            <div className="heroCopySection">
                <div className="heroSection heroCopy ">
                    <div className="container"> 
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="heroImg my-auto">
                                        <Image
                                            src={img6}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="heroText"> 
                                        <p className="mainParagrhp">
                                            Set when you're open for bookings with ease, decide minimum stay lengths, and any other rules you may have.
                                        </p> 
                                    </div>
                                </div>
                            </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportingAnotherCopy