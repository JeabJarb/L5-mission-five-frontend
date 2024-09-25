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
        {/* Buttons Section */}
        <div className="button-section">
          <button className="compare-bid-button">Place Bid</button>
          <button className="compare-buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};


export default CompareOverlay;
