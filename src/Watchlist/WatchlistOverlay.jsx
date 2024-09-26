import React from 'react';
import './WatchlistOverlay.css';

const WatchlistOverlay = ({
  title = 'No Title Provided',
  description = 'No Description Available',
  closingDate = 'N/A',
  location = 'Unknown Location',
  buy_now = null,
  current_bid = null,
  image, 
  onSelect,
  selected
}) => {
  console.log(image);

  const formatClosingDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div
      className={`overlay-card ${selected ? 'selected' : ''}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onSelect()}
    >
      <div className="picture-container">
        {image ? (
          <img
            src={image}
            alt={title}
            className="item-image"
            onError={(e) => {
              e.target.src = 'path/to/placeholder-image.png'; 
            }}
          />
        ) : (
          <img
            src="path/to/placeholder-image.png" 
            alt="Placeholder"
            className="item-image"
          />
        )}
        <div className="bottom">
          <div className="icon-hearts">
            <div className="outer-circle">
              {selected && <div className="inner-circle" />}
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="title-category">
          <div className="listing-info">{formatClosingDate(closingDate)}</div>
          <div className="location">{location}</div>
          <div className="item-title">{title}</div>
        </div>
        <div className="item-description">{description}</div>

        <div className="shipping-info-container">
          <div className="pickup-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16 16V3H1V16H16ZM16 16H23V11L20 8H16V16ZM8 18.5C8 19.8807 6.88071 21 5.5 21C4.11929 21 3 19.8807 3 18.5C3 17.1193 4.11929 16 5.5 16C6.88071 16 8 17.1193 8 18.5ZM21 18.5C21 19.8807 19.8807 21 18.5 21C17.1193 21 16 19.8807 16 18.5C16 17.1193 17.1193 16 18.5 16C19.8807 16 21 17.1193 21 18.5Z" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="pickup-text">Pick up only from Auckland Central</div>
          </div>
          <div className="shipping-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 8V11.5M3 8V21.5H8.5M10 12H14M1 3H23V8H1V3Z" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 15L14.5 21.5L11.5 19" stroke="#222222" strokeWidth="2.26667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="shipping-text">Expected shipping in 3-5 days</div>
          </div>
        </div>

        <div className="price-details-container">
          <div className="price-details">
            <div className="buy-now-label">Buy Now:</div>
            <div className="buy-now-price">
              ${buy_now !== null ? buy_now : 'N/A'}
            </div>
          </div>
          <div className="bid-details">
            <div className="current-bid-label">Current Bid:</div>
            <div className="current-bid-price">
              ${current_bid !== null ? current_bid : 'N/A'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchlistOverlay;
