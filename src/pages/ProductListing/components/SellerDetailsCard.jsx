import React from "react";
import style from "./SellerDetailsCard.module.css";

export default function SellerDetailsCard() {
  return (
    <>
      <div className={style.sellerInformationCard}>
        <div className={style.sellerInfomationContainer}>
          <img src="/assets/icons/Seller.svg" alt="seller avatar" />
          <div className={style.sellerAbout}>
            <div className={style.sellerName}>John69 (##)</div>
            <div className={style.sellerRating}>
              <div>100%</div>
              <div className={style.seeFeedback}>See Feedback</div>
            </div>
            <div className={style.sellerAbout}>
              Seller located in Auckland City, Auckland
            </div>
            <div className={style.sellerAbout}>Member since 22 July 2016</div>
          </div>
        </div>
        <div className={style.sellerBtnContainer}>
          <button className={style.contactSellerBtn}>
            <img src="/assets/icons/Message_white.svg" alt="message" />
            <div>Contact Seller</div>
          </button>
          <button className={style.addSellerToFavBtn}>
            <img src="/assets/icons/Star-Plus.svg" alt="star" />
            <div>Add to Favourite Sellers</div>
          </button>
          <div className={style.sellerOtherListing}>
            View seller's other listings
          </div>
        </div>
      </div>
    </>
  );
}
