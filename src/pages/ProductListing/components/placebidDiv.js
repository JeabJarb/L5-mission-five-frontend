const placeBidDiv = (
    <div>
      <div className={style.overlayPlaceBidHeader}>Place a bid</div>
      <div className={style.overlayPlaceBidContainer}>
        <div className={style.overlayPlaceBidProductDisplayBackground}>
          <div className={style.overlayPlaceBidProductDisplayContainer}>
            <img
              className={style.overlayImg}
              src="/images/sofa-3seater.png"
              alt="Image"
            />
            <div className={style.overlayPlaceBidListingDetails}>
              <div className={style.overlayPlaceBidListingName}>
                Modular Sofa / 3-seater
              </div>
              <div className={style.overlayPlaceBidListingCondition}>
                <div>Condition:</div>
                <div>Used - Excellent Condition</div>
                <img
                  className={style.icon}
                  src="/assets/icons/Group 71.svg"
                  alt="Help"
                />
              </div>
              <div className={style.overlayPlaceBidAmountContainer}>
                <div>
                  <div>Current Bid:</div>
                  <div
                    className={style.overlayPlaceBidAmountCurrentNBuyNowDisplay}
                  >
                    $500.00
                  </div>
                </div>
                <div>
                  <div>Buy Now:</div>
                  <div
                    className={style.overlayPlaceBidAmountCurrentNBuyNowDisplay}
                  >
                    $850.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className={style.overlayPlaceBidInputProcessContainer}>
          <div className={style.overlayPlaceBidInputHeader}>{bidText}</div>
          <div className={style.overlayPlaceBidOptionsContainer}>
            <input
              className={style.overlayPlaceBidInputAmount}
              type="text"
              placeholder="$500.00"
            />
            <div className={style.overlayPlaceBidOptions}>
              <input
                type="checkbox"
                onChange={() => setIsAutoBidCheck(!isAutoBidCheck)}
              />
              <div>Auto-bid</div>
              <div className={style.overPlaceBidMoreInfoContainer}>
                <div>More info</div>
                <img
                  className={style.icon}
                  src="/assets/icons/Group 71.svg"
                  alt="Help"
                />
              </div>
            </div>
          </div>
          <div className={style.overlayPlaceBidNeedHelp}>Need Help?</div>
          <div>
            <div className={style.overlayPlaceBidInputHeader}>Shipping</div>
            <div className={style.overlayPlaceBidShippingOptionsContainer}>
              <input type="checkbox" />
              <div>
                <div>Buyer must pick-up*</div>
                <div>Seller is located in Auckland Central, Auckland</div>
              </div>
            </div>
            <div>*Required fields</div>
          </div>
        </form>
        <div className={style.overlayPlaceBidBtnContainer}>
          <button className={style.overlayPlaceBidReviewBidBtn}>
            <img src="/assets/icons/Group 65.svg" alt="place-bid" />
            <div>{reviewAutoBid}</div>
          </button>
          <div
            className={style.overlayPlaceBidGoBack}
            onClick={() => setIsOverlayPlaceBidOpen(false)}
          >
            Go back to listing
          </div>
        </div>
      </div>
    </div>
  );