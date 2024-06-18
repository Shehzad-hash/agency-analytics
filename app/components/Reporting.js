import React from 'react'
import Image from "next/image";
import img4 from "../../public/IMAGE4.png";

const Reporting = () => {
    return (
        <div>
            <div className="heroCopySection">
                <div className="heroSection heroCopy ">
                    <div className="container"> 
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="heroImg my-auto"> 
                                            <Image
                                                src={img4}
                                                alt="Picture of the author"
                                            /> 
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="heroText"> 
                                        <p className="mainParagrhp">
                                            Just title the hangar, add a description and location, list your amenities, and add photos.
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

export default Reporting