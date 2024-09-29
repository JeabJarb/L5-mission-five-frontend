import React from "react";
import style from "./OtherListing.module.css";
import { Link } from 'react-router-dom';

export default function OtherListing({
  id,
  image,
  name,
  closingDate,
  location,
  condition,
  shipping,
  currentBid,
  buyNow,
}) {
  return (
    <Link className={style.link} to={`/marketplace/products/${id}`}>
      <div className={style.listingCard}>
        <div className={style.imageContainer}>
          <img className={style.listingImage} src={image} alt={name} />
        </div>

        <div className={style.listingItemDetails}>
          <div className={style.listingCloses}>
            <div>Listing closes:</div>
            <div>{closingDate}</div>
          </div>
          <div className={style.listingLocation}>{location}</div>
          <div className={style.listingName}>{name}</div>
          <div className={style.listingCondition}>{condition}</div>
          <div className={style.listingConidtion}>
            <img src="/assets/icons/Truck.svg" alt="truck" />
            <div>{shipping}</div>
          </div>
          <div className={style.listingConidtion}>
            <img src="/assets/icons/Shipping-Received.svg" alt="box" />
            <div>Expected Shipping in 3-5 days</div>
          </div>
          <div className={style.listingStatus}>
            <div className={style.current}>
              <div>Current Bid:</div>
              <div className={style.listingStatusDetails}>{currentBid}</div>
            </div>
            <div className={style.buyNow}>
              <div>Buy Now:</div>
              <div className={style.listingStatusDetails}>{buyNow}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
