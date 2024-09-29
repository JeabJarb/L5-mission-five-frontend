import React from "react";
import style from "./CurrentBid.module.css";

export default function CurrentBid({ listingNumber, currentBid, closing }) {
  const closingDate = new Date(closing);
  const now = new Date();
  const difference = closingDate - now;
  const totalMinutes = Math.floor(difference / 1000 / 60);
  const days = Math.floor(totalMinutes / 1440); // 1440 minutes in a day
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;

  return (
    <>
      <div className={style.listingNumber}>
        Listing #: <span>{listingNumber}</span>
      </div>
      <div className={style.currentBid}>Current Bid</div>
      <div className={style.currentBidAmount}>${currentBid}</div>
      <div className={style.reserveContainer}>
        <div className={style.reserveConditions}>
          <div>Reserve not met</div>
          <img src="/assets/icons/Ellipse 434.svg" alt="dot" />
          <div>5 others watchlisted</div>
        </div>
        <div className={style.reserveConditions}>
          <div className={style.reserveClosing}>
            <div>2 bids</div>
            <img src="/assets/icons/Ellipse 434.svg" alt="dot" />
            <div>Closes:</div>
            <div>{closing}</div>
            <img src="/assets/icons/Ellipse 434.svg" alt="dot" />
            <div>{days} days, {hours} hrs, {minutes} mins</div>
          </div>
        </div>
      </div>
    </>
  );
}
