import React from "react";
import Image from "next/image";
import Logo from "../../public/arrow.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footerBottom">
            <div className="footerRight">
              <p className="mainParagrap">HangarDirect, LLC</p>
              <a href="" className="footerNavlinks">
                Term
              </a>
              <a href="" className="footerNavlinks">
                Privcy
              </a>
            </div>
            <div className="footerLeftBtn">
              <a
                href="#"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom"
                aria-controls="offcanvasBottom"
              >
                Support & resources
                <Image src={Logo} />
              </a>
            </div>
          </div>



          <div
            class="offcanvas offcanvas-bottom customCanvas"
            tabindex="-1"
            id="offcanvasBottom"
            aria-labelledby="offcanvasBottomLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close text-reset me-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body small">
              <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="footerLInks">
                    <h1 className="mainHeading">Support</h1>
                    <a href="#" className="mainParagrhp">
                    Help Center
                    </a>
                    <a href="#" className="mainParagrhp"> 
                    Safety information
                    </a>
                    <a href="#" className="mainParagrhp">
                    Cancellation options
                    </a> 
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footerLInks">
                    <h1 className="mainHeading">Hosting</h1>
                    <a href="#" className="mainParagrhp">
                    Try hosting
                    
                    </a>
                    <a href="#" className="mainParagrhp">
                    Subscription Plans
                  
                    </a>
                    <a href="#" className="mainParagrhp">
                    Explore hosting resources
                    </a>
                    <a href="#" className="mainParagrhp">
                    How to host responsibly
                    </a> 
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footerLInks">
                    <h1 className="mainHeading">Hangar Direct</h1>
                    <a href="#" className="mainParagrhp">
                    Newsroom
                    </a>
                    <a href="#" className="mainParagrhp">
                     
                    Visit our community forum
                    </a>
                    <a href="#" className="mainParagrhp">
                    iFlightPlanner
                    </a> 
                  </div>
                </div>
              </div>  
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
