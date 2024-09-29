import React, { useState } from "react";
import style from "./PlaceBid.module.css";

export default function PlaceBid({
  currentBid,
  buyNow,
  image,
  name,
  condition,
  id,
}) {
  const [isAutoBidCheck, setIsAutoBidCheck] = useState(false);
  const [userBid, setUserBid] = useState(""); // State for user bid input
  const [pickupChecked, setPickupChecked] = useState(false); // State for pickup checkbox
  const [termsChecked, setTermChecked] = useState(false);
  const [confirmedBid, setConfirmedBid] = useState(""); // State for confirmed bid
  const [highestBidderMessage, setHighestBidderMessage] = useState("");

  const bidText = isAutoBidCheck ? "Maximum bid*" : "Your bid*";
  const reviewAutoBid = isAutoBidCheck ? "Review Auto-bid" : "Review Bid";

  console.log(
    JSON.stringify({
      current_bid: parseInt(userBid),
    })
  );
  // Handle bid input
  const handleUserBidInput = (e) => {
    setUserBid(e.target.value);
  };

  // Handle form submission validation
  const isFormValid = userBid > currentBid && pickupChecked;
  const isTermChecked = termsChecked;

  // Handle the review bid button click
  const handleReviewBidClick = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!isFormValid) {
      // Alert the user if the form is invalid
      alert(
        "Please enter a bid higher than the current bid and check the pickup option."
      );
    } else {
      // Set the confirmed bid to the user's input value
      setConfirmedBid(userBid);
      console.log("Form is valid, proceed to review.");
      // You can add your submission logic here if needed
    }
  };

  const handleConfirmBidClick = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!isTermChecked) {
      // Alert the user if the form is invalid
      alert("Please agree to the terms and conditions.");
      return;
    }

    // Set the confirmed bid to the user's input value
    setConfirmedBid(userBid);
    setHighestBidderMessage("You’re currently the highest bidder!");

    try {
      const response = await fetch(
        `http://localhost:4000/api/products/${id}/bid`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ current_bid: parseInt(userBid) }), // Send the new bid in the request body
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update the bid");
      }

      const data = await response.json();
      console.log("Bid updated successfully:", data);
      // Optionally, you could also update the state to reflect the new current bid here
    } catch (error) {
      console.error("Error updating the bid:", error);
      alert("There was an error placing your bid. Please try again.");
    }
  };

  return (
    <div>
      {highestBidderMessage ? ( // Render the highest bidder message
        <>
          <div className={style.overlayPlaceBidHeader}>
            Bid successfully placed ✔
          </div>
          <div className={style.overlayPlaceBidContainer}>
            <div className={style.confirmMessage}>
              A confirmation email has been sent to name@mail.com You have
              subscribed to received notifications about the auction, for any
              changes or if further information is required, please contact us
            </div>
            <div className={style.highestBidder}>
              You’re currently the highest bidder!
            </div>
            <div className={style.overlayPlaceBidProductDisplayBackground}>
              <div className={style.overlayPlaceBidProductDisplayContainer}>
                <img className={style.overlayImg} src={image} alt={name} />
                <div className={style.overlayPlaceBidListingDetails}>
                  <div className={style.overlayPlaceBidListingName}>{name}</div>
                  <div className={style.overlayPlaceBidListingCondition}>
                    <div>Condition:</div>
                    <div>{condition}</div>
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
                        className={
                          style.overlayPlaceBidAmountCurrentNBuyNowDisplay
                        }
                      >
                        ${userBid}
                      </div>
                    </div>
                    <div>
                      <div>Buy Now:</div>
                      <div
                        className={
                          style.overlayPlaceBidAmountCurrentNBuyNowDisplay
                        }
                      >
                        ${buyNow}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.secondMessage}>
              <div className={style.good}>
                Looking good so far, but you could still be outbid.{" "}
              </div>
              <div className={style.suggestion}>
                View your auctions in progress under the “My Trade Me” section
                where you can continue bidding or set an auto-bid. You will also
                receive an email notification 12 hours before the auction ends
                so be sure to check in!
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {confirmedBid ? (
            <div>
              <div className={style.overlayPlaceBidHeader}>Review bid</div>
              <div className={style.overlayPlaceBidContainer}>
                <div className={style.overlayPlaceBidProductDisplayBackground}>
                  <div className={style.overlayPlaceBidProductDisplayContainer}>
                    <img className={style.overlayImg} src={image} alt={name} />
                    <div className={style.overlayPlaceBidListingDetails}>
                      <div className={style.overlayPlaceBidListingName}>
                        {name}
                      </div>
                      <div className={style.overlayPlaceBidListingCondition}>
                        <div>Condition:</div>
                        <div>{condition}</div>
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
                            className={
                              style.overlayPlaceBidAmountCurrentNBuyNowDisplay
                            }
                          >
                            ${currentBid}
                          </div>
                        </div>
                        <div>
                          <div>Buy Now:</div>
                          <div
                            className={
                              style.overlayPlaceBidAmountCurrentNBuyNowDisplay
                            }
                          >
                            ${buyNow}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <form className={style.overlayPlaceBidInputProcessContainer}>
                  {confirmedBid ? ( // Conditionally render the confirmed bid amount
                    <>
                      <div className={style.confirmBidContainer}>
                        <div className={style.confirmBidHeader}>
                          Bid amount:
                        </div>
                        <div className={style.bidAmount}>${confirmedBid}</div>
                        {highestBidderMessage && ( // Render the highest bidder message
                          <div className={style.highestBidderMessage}>
                            {highestBidderMessage}
                          </div>
                        )}
                      </div>
                      <div className={style.overlayPlaceBidInputHeader}>
                        Shipping
                      </div>
                      <div
                        className={
                          style.overlayPlaceBidShippingOptionsContainer
                        }
                      >
                        <input
                          type="checkbox"
                          checked={termsChecked} // Bind to pickup checkbox state
                          onChange={() => setTermChecked(!termsChecked)} // Update pickup checkbox state
                        />
                        <div>
                          <div>
                            I understand that if I win, I am legally obligated
                            to complete my purchase*
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          style.overlayPlaceBidShippingOptionsContainer
                        }
                      >
                        <input
                          type="checkbox"
                          placeholder="check"
                          checked={pickupChecked} // Bind to pickup checkbox state
                        />
                        <div>Email me if I'm outbid</div>
                      </div>
                      <div>*Required fields</div>
                    </>
                  ) : (
                    <>
                      <div className={style.overlayPlaceBidInputHeader}>
                        {bidText}
                      </div>
                      <div className={style.overlayPlaceBidOptionsContainer}>
                        <input
                          className={style.overlayPlaceBidInputAmount}
                          type="text"
                          placeholder={`$${currentBid.toFixed(2)}`}
                          onChange={handleUserBidInput} // Update user bid input
                          value={confirmedBid || userBid} // Show confirmed bid if available, otherwise show user input
                        />
                        <div className={style.overlayPlaceBidOptions}>
                          <input
                            type="checkbox"
                            checked={isAutoBidCheck}
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
                      <div className={style.overlayPlaceBidNeedHelp}>
                        Need Help?
                      </div>
                      <div>
                        <div className={style.overlayPlaceBidInputHeader}>
                          Shipping
                        </div>
                        <div
                          className={
                            style.overlayPlaceBidShippingOptionsContainer
                          }
                        >
                          <input
                            type="checkbox"
                            checked={pickupChecked} // Bind to pickup checkbox state
                            onChange={() => setPickupChecked(!pickupChecked)} // Update pickup checkbox state
                          />
                          <div>
                            <div>Buyer must pick-up*</div>
                            <div>
                              Seller is located in Auckland Central, Auckland
                            </div>
                          </div>
                        </div>
                        <div>*Required fields</div>
                      </div>
                    </>
                  )}
                </form>
                <div className={style.overlayPlaceBidBtnContainer}>
                  {confirmedBid ? (
                    <button
                      className={style.overlayPlaceBidReviewBidBtn}
                      onClick={handleConfirmBidClick} // Handle the click event with validation
                    >
                      <img src="/assets/icons/Group 65.svg" alt="place-bid" />
                      <div>Confirm Bid</div>
                    </button>
                  ) : (
                    <button
                      className={style.overlayPlaceBidReviewBidBtn}
                      onClick={handleReviewBidClick} // Handle the click event with validation
                    >
                      <img src="/assets/icons/Group 65.svg" alt="place-bid" />
                      <div>{reviewAutoBid}</div>
                    </button>
                  )}

                  <div
                    className={style.overlayPlaceBidGoBack}
                    onClick={() => setIsOverlayPlaceBidOpen(false)}
                  >
                    Go back to listing
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className={style.overlayPlaceBidHeader}>Place a bid</div>
              <div className={style.overlayPlaceBidContainer}>
                <div className={style.overlayPlaceBidProductDisplayBackground}>
                  <div className={style.overlayPlaceBidProductDisplayContainer}>
                    <img className={style.overlayImg} src={image} alt={name} />
                    <div className={style.overlayPlaceBidListingDetails}>
                      <div className={style.overlayPlaceBidListingName}>
                        {name}
                      </div>
                      <div className={style.overlayPlaceBidListingCondition}>
                        <div>Condition:</div>
                        <div>{condition}</div>
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
                            className={
                              style.overlayPlaceBidAmountCurrentNBuyNowDisplay
                            }
                          >
                            ${currentBid}
                          </div>
                        </div>
                        <div>
                          <div>Buy Now:</div>
                          <div
                            className={
                              style.overlayPlaceBidAmountCurrentNBuyNowDisplay
                            }
                          >
                            ${buyNow}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <form className={style.overlayPlaceBidInputProcessContainer}>
                  {confirmedBid ? ( // Conditionally render the confirmed bid amount
                    <>
                      <div className={style.confirmBidContainer}>
                        <div className={style.confirmBidHeader}>
                          Bid amount:
                        </div>
                        <div className={style.bidAmount}>${confirmedBid}</div>
                      </div>
                      <div className={style.overlayPlaceBidInputHeader}>
                        Shipping
                      </div>
                      <div
                        className={
                          style.overlayPlaceBidShippingOptionsContainer
                        }
                      >
                        <input
                          type="checkbox"
                          checked={termsChecked} // Bind to pickup checkbox state
                          onChange={() => setTermChecked(!termsChecked)} // Update pickup checkbox state
                        />
                        <div>
                          <div>
                            I understand that if I win, I am legally obligated
                            to complete my purchase*
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          style.overlayPlaceBidShippingOptionsContainer
                        }
                      >
                        <input
                          type="checkbox"
                          placeholder="check"
                          checked={pickupChecked} // Bind to pickup checkbox state
                        />
                        <div>Email me if I'm outbid</div>
                      </div>
                      <div>*Required fields</div>
                    </>
                  ) : (
                    <>
                      <div className={style.overlayPlaceBidInputHeader}>
                        {bidText}
                      </div>
                      <div className={style.overlayPlaceBidOptionsContainer}>
                        <input
                          className={style.overlayPlaceBidInputAmount}
                          type="text"
                          placeholder={`$${currentBid.toFixed(2)}`}
                          onChange={handleUserBidInput} // Update user bid input
                          value={confirmedBid || userBid} // Show confirmed bid if available, otherwise show user input
                        />
                        <div className={style.overlayPlaceBidOptions}>
                          <input
                            type="checkbox"
                            checked={isAutoBidCheck}
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
                      <div className={style.overlayPlaceBidNeedHelp}>
                        Need Help?
                      </div>
                      <div>
                        <div className={style.overlayPlaceBidInputHeader}>
                          Shipping
                        </div>
                        <div
                          className={
                            style.overlayPlaceBidShippingOptionsContainer
                          }
                        >
                          <input
                            type="checkbox"
                            checked={pickupChecked} // Bind to pickup checkbox state
                            onChange={() => setPickupChecked(!pickupChecked)} // Update pickup checkbox state
                          />
                          <div>
                            <div>Buyer must pick-up*</div>
                            <div>
                              Seller is located in Auckland Central, Auckland
                            </div>
                          </div>
                        </div>
                        <div>*Required fields</div>
                      </div>
                    </>
                  )}
                </form>
                <div className={style.overlayPlaceBidBtnContainer}>
                  {confirmedBid ? (
                    <button
                      className={style.overlayPlaceBidReviewBidBtn}
                      onClick={handleConfirmBidClick} // Handle the click event with validation
                    >
                      <img src="/assets/icons/Group 65.svg" alt="place-bid" />
                      <div>Confirm Bid</div>
                    </button>
                  ) : (
                    <button
                      className={style.overlayPlaceBidReviewBidBtn}
                      onClick={handleReviewBidClick} // Handle the click event with validation
                    >
                      <img src="/assets/icons/Group 65.svg" alt="place-bid" />
                      <div>{reviewAutoBid}</div>
                    </button>
                  )}

                  <div
                    className={style.overlayPlaceBidGoBack}
                    onClick={() => setIsOverlayPlaceBidOpen(false)}
                  >
                    Go back to listing
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
