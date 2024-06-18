import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="container">
                
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footerLInks">
                                <h1 className="mainHeading">Product</h1> 
                                    <a href="#" className="mainParagrhp">Integrations</a>
                                    <a href="#" className="mainParagrhp"> Features</a>
                                    <a href="#" className="mainParagrhp">Pricing</a>
                                    <a href="#" className="mainParagrhp">Compare Us</a>
                                    <a href="#" className="mainParagrhp">Start Free Trial</a> 
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="footerLInks">
                                <h1 className="mainHeading">Company</h1> 
                                    <a href="#" className="mainParagrhp"> About</a>
                                    <a href="#" className="mainParagrhp"> Customers</a>
                                    <a href="#" className="mainParagrhp">Contact Us</a>
                                    <a href="#" className="mainParagrhp">Partners</a>
                                    <a href="#" className="mainParagrhp">Newsroom</a>  
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="footerLInks">
                                <h1 className="mainHeading">Resources</h1> 
                                    <a href="#" className="mainParagrhp">Blog</a>
                                    <a href="#" className="mainParagrhp"> Help Center</a>
                                    <a href="#" className="mainParagrhp">Client Reporting Guide</a>
                                    <a href="#" className="mainParagrhp">Videos</a>
                                    <a href="#" className="mainParagrhp">Dashboard Templates</a> 
                                    <a href="#" className="mainParagrhp">Report Templates</a> 
                            </div>
                        </div>
                    </div> 
                <hr />
                <div className="footerBottom">
                    <p className="mainParagrap">© 2024 AgencyAnalytics Inc</p>
                    <a href="" className="footerNavlinks">Term</a>
                    <a href="" className="footerNavlinks">Privcy</a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer