import React from 'react';
import './CompareOverlay.css'; 

const CompareOverlay = ({ item }) => {
  if (!item) return null; 

  const formatClosingDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const productDetails = [
    { label: "Condition", value: item.project_details.condition },
    { label: "Colour", value: item.project_details.colour },
    { label: "Item Length", value: `${item.project_details.item_length} cm` },
    { label: "Item Width", value: `${item.project_details.item_width} cm` },
    { label: "Item Height", value: `${item.project_details.item_height} cm` },
    { label: "Item Weight", value: `${item.project_details.item_weight} kg` },
    { label: "Material", value: item.project_details.material },
    { label: "Features", value: item.project_details.features },
  ];

  return (
    <div className="compare-overlay">
      <div className="compare-overlay-content">
        <img src={item.image} alt={item.title} />
        <h2 className="title">{item.title}</h2>

        <p className="compare-condition-label">
          <strong>Condition:</strong> {item.project_details.condition}
        </p>

        <div className="compare-price-section">
          <div className="compare-current-bid-section">
            <p className="compare-current-bid-label">Current Bid:</p>
            <p className="compare-current-bid-value">${item.current_bid}</p>
          </div>

          <div className="compare-buy-now-section">
            <p className="compare-buy-now-label">Buy Now:</p>
            <p className="compare-buy-now-value">${item.buy_now}</p>
          </div>
        </div>

        <p className="closing-date">
          <strong>Closing Date:</strong> <span>{formatClosingDate(item.closingDate)}</span>
        </p>

        <h3 className="product-details-heading">Product Details</h3>
        <div className="details-section">
          {productDetails.map((detail, index) => (
            <div
              key={index}
              className={`product-detail ${index % 2 === 0 ? 'alt-bg' : 'alt-bg-white'}`}
            >
              <strong>{detail.label}:</strong>
              <span>{detail.value}</span>
            </div>
          ))}
        </div>

        <div className="details-section">
          <div className="product-detail inline-flex">
            <strong>Main Category:</strong>
            <div className="values-background"> 
              {[
                { label: "Brand", value: item.project_details.manufacturer.brand },
                { label: "Make", value: item.project_details.manufacturer.make },
                { label: "Model", value: item.project_details.manufacturer.model },
              ].map((detail, index) => (
                <div key={index} className="value-item">
                  <span>{detail.label}: {detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="product-detail year-manufactured">
          <strong>Year Manufactured:</strong>
          <span>{item.project_details.year_made}</span>
        </p>
        <div className="button-section">
          <button className="compare-bid-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
          <path d="M13.0835 12.5835L21.5279 20.5002" stroke="white" stroke-width="2.11111" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="2" y="12.9302" width="4.22222" height="8.44444" transform="rotate(-45 2 12.9302)" stroke="white" stroke-width="2.11111" stroke-linejoin="round"/>
          <rect x="10.4443" y="4.48535" width="4.22222" height="8.44444" transform="rotate(-45 10.4443 4.48535)" stroke="white" stroke-width="2.11111" stroke-linejoin="round"/>
          <path d="M10.9722 6.25L6.22217 11" stroke="white" stroke-width="2.11111"/>
          <path d="M15.1709 9.94434L10.4209 14.6943" stroke="white" stroke-width="2.11111"/>
          </svg>
            Place Bid</button>
          <button className="compare-buy-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <g clip-path="url(#clip0_957_13587)">
          <path d="M1 1.5H5L7.68 14.89C7.77144 15.3504 8.02191 15.764 8.38755 16.0583C8.75318 16.3526 9.2107 16.509 9.68 16.5H19.4C19.8693 16.509 20.3268 16.3526 20.6925 16.0583C21.0581 15.764 21.3086 15.3504 21.4 14.89L23 6.5H6M10 21.5C10 22.0523 9.55228 22.5 9 22.5C8.44772 22.5 8 22.0523 8 21.5C8 20.9477 8.44772 20.5 9 20.5C9.55228 20.5 10 20.9477 10 21.5ZM21 21.5C21 22.0523 20.5523 22.5 20 22.5C19.4477 22.5 19 22.0523 19 21.5C19 20.9477 19.4477 20.5 20 20.5C20.5523 20.5 21 20.9477 21 21.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_957_13587">
          <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
          </clipPath>
          </defs>
          </svg>
            Buy Now</button>
        </div>
      </div>
    </div>
  );
};


export default CompareOverlay;
