import React from 'react'
import Image from "next/image";
import img2 from "../../public/IMAGE2.png";

const HeroCopy = () => {
    return (
        <div>
            <div className="heroCopySection">
                <div className="heroSection heroCopy ">
                    <div className="container"> 
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="heroImg my-auto">
                                        <Image
                                            src={img2}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="heroText">
                                        <h1 className="mainHeading">Here's how it works:

                                        </h1>
                                        <p className="mainParagrhp">
                                            Hangar Direct is the first C2C (customer-to-customer) platform for renting hangar space on a nightly or monthly basis. Like AirBnB, for hangars!
                                        </p>
                                        <p className="mainParagrhp"> 
                                        We all know someone with unused hangar space, whether their aircraft is gone for extended periods, or they are just not using all the space they have, Hangar Direct is a great way to monetize that extra space and off-set monthly costs. 
                                        </p>

                                        <p className="mainParagrhp"> 
                                        Pilots and aircraft managers are often in need of hangar space on a short term basis, and long term leases don't make sense in those cases. Unfortunately, booking a hangar through an FBO can be impossible when their space fills up, especially when weather comes in, or during high traffic events. Hangar Direct is the perfect solution that benefits both pilots and hangar owners. 
                                        </p>
                                        <p className="mainParagrhp"> 
                                        When you get a new hangar owner listed on our platform, you'll earn a percentage of our service fee on all future bookings! 
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

export default HeroCopy