import React from 'react'
import Image from "next/image";
import img7 from "../../public/IMAGE7.png";

const Track = () => {
  return (
    <div>
      <div className="exploreSection">
        <div className="container">  
            <div className="exploreContainer">
              <h1 className="mainHeading">Hangar Bookings at the speed of 2024.</h1>
              <p className='smallParagraph'>Founded by pilots and aircraft managers in the tech space, we are a technology company first and foremost, which means we offer the functionality, ease of use, and intuitive interface you expect in today's day and age.</p>

              <div className='col-lg-6 mx-auto'>  
              <div className="exploreBottomImg">
                <Image
                  src={img7}
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

export default Track