import React from 'react'
import Image from "next/image";
import img3 from "../../public/IMAGE3.png";

const Explore = () => {
  return (
    <div>
      <div className="exploreSection">
        <div className="container"> 
            <div className="exploreContainer">
              <p className="mainParagrhp">
                Hangar owners earn from monetizing their unused space, pilots will be happy to find a hangar, and you'll be making passive income from your referrals.
              </p>
              <h1 className="mainHeading">Signing-up is easy. </h1>
              <button className="mainBtn">Join</button>

              <div className="exploreBottomImg"> 
                  <Image
                    src={img3}
                    alt="Picture of the author"
                  /> 
              </div>
            </div>  
          </div>
        </div>
      </div> 
  )
}

export default Explore