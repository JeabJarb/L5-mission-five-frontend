import React from 'react';
import Navbar from '../common/Navbar'
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import './Watchlist.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Breadcrumb />
      <div className="MainContent">
        <div className="PrimaryNav">
          <div className="Menu">
            <div className="BreadcrumbContainer">
              <div className="Breadcrumb">
                <div className="BreadcrumbBase">
                  <div className="BreadcrumbText">Home</div>
                  <div className="BreadcrumbSlash">/</div>
                </div>
                <div className="BreadcrumbBase">
                  <div className="BreadcrumbText">Watchlist</div>
                </div>
              </div>
            </div>
          </div>
          <div className="SectionText">
            <div className="SecondaryHeadline">Watchlist</div>
          </div>
        </div>

        <div className="Section">
          <div className="ComparisonToolText">
            <span>Can’t decide? Use our handy comparison tool to view items side-by-side. Simply click on ‘</span>
            <span className="BoldText">Select to compare</span>
            <span>’ and get started!</span>
          </div>
          <div className="BackButton">
            <div className="ChevronIcon"></div>
            <div className="BackToResults">Back to Results Page</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
