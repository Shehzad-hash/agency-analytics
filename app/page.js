import React from 'react';
import NavBar from './components/NavBar.js'; 
import Hero from './components/Hero.js' ;
import HeroCopy from './components/HeroCopy.js' 
import Explore from './components/Explore.js';
import Reporting from './components/Reporting.js';
import ReportingCopy from './components/ReportingCopy.js';
import ReprotingAnohterCopy from './components/ReportingAnotherCopy.js' 
import Track  from './components/Track.js'
import Footer from './components/Footer.js'
import ReportingCopy3 from './components/ReportingCopy3.js';
import ReportingCopy4 from './components/ReportingCopy4.js';


function App() { 
 
  return (
    <div className="App">
      <NavBar />
      <Hero /> 
      <HeroCopy /> 
      <Explore />
      <Reporting />
      <ReportingCopy />
      <ReprotingAnohterCopy />
      <Track />
      <ReportingCopy3 />
      <ReportingCopy4 />
      <Footer />  
    </div>
  );
}

export default App;