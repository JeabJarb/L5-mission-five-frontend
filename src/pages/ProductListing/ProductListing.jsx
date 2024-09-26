import { useState } from "react";
import Navbar from "../../common/Navbar";
import Breadcrumb from "../../common/Breadcrumb";
import Footer from "../../common/Footer";
import style from "./ProductListing.module.css";

const Overlay = ({ onClose, children }) => {
  return (
    <div className={style.overlay}>
      <div className={style.overlayBackground}>
        <div className={style.overlayContainer}>
          <div className={style.overlayControls}>
            <button className={style.overlayClose} onClick={onClose} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

function ProductListing() {
  const [isOverlayListingDetailsOpen, setIsOverlayListingDetailsOpen] =
    useState(false);
  const [isOverlayPlaceBidOpen, setIsOverlayPlaceBidOpen] = useState(false);
  const [isAutoBidCheck, setIsAutoBidCheck] = useState(false);
  const bidText = isAutoBidCheck ? "Maximum bid*" : "Your bid*";
  const reviewAutoBid = isAutoBidCheck ? "Review Auto-bid" : "Review Bid";

  return (
    <div>
      <Navbar />
      <Breadcrumb />
      <div className={style.productListingContainer}>
        <div className={style.aboutProdctContainer}>
          <div>
            <img src="/images/sofa-3seater.png" alt="image" />
          </div>
          <div>
            <div className={style.frontHeader}>About this item</div>
            <div>
              <div>
                <div className={style.productDetialsHeader}>
                  <div>Product Details</div>
                  <div className={style.iconsContainer}>
                    <img
                      className={style.icon}
                      src="/assets/icons/Icon_hearts.svg"
                      alt="whistlist"
                    />
                    <img
                      className={style.icon}
                      src="/assets/icons/List.svg"
                      alt="list"
                      onClick={() =>
                        setIsOverlayListingDetailsOpen(
                          !isOverlayListingDetailsOpen
                        )
                      }
                    />
                    {isOverlayListingDetailsOpen && (
                      <Overlay
                        onClose={() => setIsOverlayListingDetailsOpen(false)}
                      >
                        <div>
                          <div className={style.overlayProductHeader}>
                            Product Details
                          </div>
                          <div>
                            <div className={style.overlayDetailsContainer}>
                              <div className={style.productDetailTableColour}>
                                <div className={style.productDetails}>
                                  Condition
                                </div>
                                <div className={style.details}>
                                  Used: An item that has been used previously.
                                  The item may have some signs of cosmetic wear,
                                  but is fully operational and fuctions as
                                  intended
                                </div>
                              </div>
                              <div className={style.productDetailTable}>
                                <div className={style.productDetails}>
                                  Colour
                                </div>
                                <div className={style.details}>Grey</div>
                              </div>
                              <div className={style.productDetailTableColour}>
                                <div className={style.productDetails}>
                                  Item Length
                                </div>
                                <div className={style.details}>90 cm</div>
                              </div>
                              <div className={style.productDetailTable}>
                                <div className={style.productDetails}>
                                  Item Width
                                </div>
                                <div className={style.details}>220 cm</div>
                              </div>
                              <div className={style.productDetailTableColour}>
                                <div className={style.productDetails}>
                                  Item Height
                                </div>
                                <div className={style.details}>80 cm</div>
                              </div>
                              <div className={style.productDetailTable}>
                                <div className={style.productDetails}>
                                  Item Weight
                                </div>
                                <div className={style.details}>50 kg</div>
                              </div>
                              <div className={style.productDetailTableColour}>
                                <div className={style.productDetails}>
                                  Upholstery Material
                                </div>
                                <div className={style.details}>Fabric</div>
                              </div>
                              <div className={style.productDetailTable}>
                                <div className={style.productDetails}>
                                  Features
                                </div>
                                <div className={style.details}>
                                  3-seater, Modular
                                </div>
                              </div>
                              <div className={style.productDetailTableColour}>
                                <div className={style.productDetails}>
                                  Manufacturer
                                </div>
                                <div className={style.details}>
                                  <div className={style.manufacturerDetails}>
                                    <div>Brand:</div>
                                    <div>Freedom Furniture</div>
                                  </div>
                                  <div className={style.manufacturerDetails}>
                                    <div>Make:</div>
                                    <div>Mario</div>
                                  </div>
                                  <div className={style.manufacturerDetails}>
                                    <div>Model:</div>
                                    <div>Bellini</div>
                                  </div>
                                </div>
                              </div>
                              <div className={style.productDetailTable}>
                                <div className={style.productDetails}>
                                  Year Manufactured
                                </div>
                                <div className={style.details}>2010</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Overlay>
                    )}
                    <img
                      className={style.icon}
                      src="/assets/icons/Message.svg"
                      alt="message"
                    />
                    <img
                      className={style.icon}
                      src="/assets/icons/Share.svg"
                      alt="share"
                    />
                  </div>
                </div>
                <div className={style.detailsContainer}>
                  <div className={style.productDetailTableColour}>
                    <div className={style.productDetails}>Condition</div>
                    <div className={style.details}>
                      Used: An item that has been used previously. The item may
                      have some signs of cosmetic wear, but is fully operational
                      and fuctions as intended
                    </div>
                  </div>
                  <div className={style.productDetailTable}>
                    <div className={style.productDetails}>Colour</div>
                    <div className={style.details}>Grey</div>
                  </div>
                  <div className={style.productDetailTableColour}>
                    <div className={style.productDetails}>Item Length</div>
                    <div className={style.details}>90 cm</div>
                  </div>
                  <div className={style.productDetailTable}>
                    <div className={style.productDetails}>Item Width</div>
                    <div className={style.details}>220 cm</div>
                  </div>
                  <div className={style.productDetailTableColour}>
                    <div className={style.productDetails}>Item Height</div>
                    <div className={style.details}>80 cm</div>
                  </div>
                  <div className={style.productDetailTable}>
                    <div className={style.productDetails}>Item Weight</div>
                    <div className={style.details}>50 kg</div>
                  </div>
                  <div className={style.productDetailTableColour}>
                    <div className={style.productDetails}>
                      Upholstery Material
                    </div>
                    <div className={style.details}>Fabric</div>
                  </div>
                  <div className={style.productDetailTable}>
                    <div className={style.productDetails}>Features</div>
                    <div className={style.details}>3-seater, Modular</div>
                  </div>
                  <div className={style.productDetailTableColour}>
                    <div className={style.productDetails}>Manufacturer</div>
                    <div className={style.details}>
                      <div className={style.manufacturerDetails}>
                        <div>Brand:</div>
                        <div>Freedom Furniture</div>
                      </div>
                      <div className={style.manufacturerDetails}>
                        <div>Make:</div>
                        <div>Mario</div>
                      </div>
                      <div className={style.manufacturerDetails}>
                        <div>Model:</div>
                        <div>Bellini</div>
                      </div>
                    </div>
                  </div>
                  <div className={style.productDetailTable}>
                    <div className={style.productDetails}>
                      Year Manufactured
                    </div>
                    <div className={style.details}>2010</div>
                  </div>
                </div>

                <div className={style.productDetialsHeader}>
                  Shipping, Returns, Payment
                </div>
                <div className={style.detailsContainer}>
                  <div className={style.productDetailTableColour}>
                    <div className={style.productDetails}>Shipping</div>
                    <div className={style.details}>
                      Pick up only from Auckland Central, Auckland
                    </div>
                  </div>
                  <div className={style.productDetailTable}>
                    <div className={style.productDetails}>Returns</div>
                    <div className={style.details}>
                      Seller does not accept returns. See details here. Find out
                      more about Buyers Protection here.
                    </div>
                  </div>
                  <div className={style.productDetailTableColour}>
                    <div className={style.productDetails}>Payment</div>
                    <div className={style.details}>Cash, NZ Bank Deposit</div>
                  </div>
                </div>

                <div className={style.productDetialsHeader}>
                  <div>Product Description</div>
                  <div className={style.iconsContainer}>
                    <div>Tap to Translate</div>
                    <img
                      className={style.icon}
                      src="/assets/icons/ph_globe.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.productDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate laudantium, ipsum quam earum enim at fugiat sequi.
                  Adipisci quos quibusdam dolor harum fugit maxime deleniti eos
                  consequatur. Reiciendis, dolores soluta! Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Nobis magnam nemo
                  debitis libero neque, sint saepe maiores quibusdam totam iusto
                  nam ut, voluptates aspernatur veniam magni reprehenderit
                  perspiciatis rerum quas. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Quod, omnis quia ea, quibusdam
                  tenetur consectetur illum quasi, recusandae iste odio
                  doloribus pariatur? Nemo accusantium quaerat consequuntur
                  mollitia architecto! Natus, ipsam? Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Sunt voluptas incidunt voluptate
                  eaque at, et neque minus iure blanditiis repellendus.
                  Adipisci, magni ipsam. Temporibus molestiae in repudiandae,
                  illo mollitia similique. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Illo recusandae magnam
                  dignissimos, minima adipisci cumque voluptatem similique
                  aliquam molestias unde quo ullam quos quidem placeat
                  reprehenderit ratione provident architecto ab.
                </div>
                <div className={style.productDetialsHeader}>
                  <div>Question & Answers</div>
                </div>
                <div className={style.askQuestionContainer}>
                  <div>Need more Information?</div>
                  <button className={style.askQuestionBtn}>
                    Ask a question to the seller
                  </button>
                </div>
                <div className={style.buyerTable}>
                  <div className={style.buyer}>Buyer (##)</div>
                  <div className={style.questionNAnswer}>
                    <div className={style.question}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus modi perferendis, similique cupiditate, tenetur
                      eaque quo recusandae possimus architecto ad numquam
                      dolorum quia maiores ea laborum dicta corporis aut illo!
                    </div>
                    <div className={style.questionDateNTime}>
                      12:38 pm, Sun 1 Sep
                    </div>
                  </div>
                </div>
                <div className={style.sellerTable}>
                  <div className={style.seller}>
                    <img
                      src="/assets/icons/material-symbols_reply.svg"
                      alt="reply"
                    />
                    <div>Seller (##)</div>
                  </div>
                  <div className={style.questionNAnswer}>
                    <div className={style.answer}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus modi perferendis, similique cupiditate, tenetur
                      eaque quo recusandae possimus architecto ad numquam
                      dolorum quia maiores ea laborum dicta corporis aut illo!
                    </div>
                    <div className={style.answerDateNTime}>
                      12:38 pm, Sun 1 Sep
                    </div>
                  </div>
                </div>
                <div className={style.buyerTable}>
                  <div className={style.buyer}>Buyer (##)</div>
                  <div className={style.questionNAnswer}>
                    <div className={style.question}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus modi perferendis, similique cupiditate, tenetur
                      eaque quo recusandae possimus architecto ad numquam
                      dolorum quia maiores ea laborum dicta corporis aut illo!
                    </div>
                    <div className={style.questionDateNTime}>
                      12:38 pm, Sun 1 Sep
                    </div>
                  </div>
                </div>
                <div className={style.sellerTable}>
                  <div className={style.seller}>
                    <img
                      src="/assets/icons/material-symbols_reply.svg"
                      alt="reply"
                    />
                    <div>Seller (##)</div>
                  </div>
                  <div className={style.questionNAnswer}>
                    <div className={style.answer}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus modi perferendis, similique cupiditate, tenetur
                      eaque quo recusandae possimus architecto ad numquam
                      dolorum quia maiores ea laborum dicta corporis aut illo!
                    </div>
                    <div className={style.answerDateNTime}>
                      12:38 pm, Sun 1 Sep
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.placeBidContainer}>
          <div className={style.frontHeader}>Modular Sofa / 3-seater</div>
          <div>
            <div className={style.conditionRight}>
              Condition: <span>Used - Excellent Condition</span>{" "}
              <img
                className={style.icon}
                src="/assets/icons/Group 71.svg"
                alt="help"
              />
            </div>
          </div>
          <div className={style.closingDateNIconsContainer}>
            <div className={style.closingDateNTimeContainer}>
              <img src="/assets/icons/Clock.svg" alt="clock" />
              <div>
                <div>Close: Sun 15th Sep, 8:04pm</div>
                <div>2 days, 10 hrs, 45 mins</div>
              </div>
            </div>
            <div className={style.iconsContainer}>
              <img
                className={style.icon}
                src="/assets/icons/Icon_hearts.svg"
                alt="whistlist"
              />
              <img
                className={style.icon}
                src="/assets/icons/List.svg"
                alt="list"
                onClick={() =>
                  setIsOverlayListingDetailsOpen(!isOverlayListingDetailsOpen)
                }
              />
              {isOverlayListingDetailsOpen && (
                <Overlay onClose={() => setIsOverlayListingDetailsOpen(false)}>
                  <div>
                    <div className={style.overlayProductHeader}>
                      Product Details
                    </div>
                    <div>
                      <div className={style.overlayDetailsContainer}>
                        <div className={style.productDetailTableColour}>
                          <div className={style.productDetails}>Condition</div>
                          <div className={style.details}>
                            Used: An item that has been used previously. The
                            item may have some signs of cosmetic wear, but is
                            fully operational and fuctions as intended
                          </div>
                        </div>
                        <div className={style.productDetailTable}>
                          <div className={style.productDetails}>Colour</div>
                          <div className={style.details}>Grey</div>
                        </div>
                        <div className={style.productDetailTableColour}>
                          <div className={style.productDetails}>
                            Item Length
                          </div>
                          <div className={style.details}>90 cm</div>
                        </div>
                        <div className={style.productDetailTable}>
                          <div className={style.productDetails}>Item Width</div>
                          <div className={style.details}>220 cm</div>
                        </div>
                        <div className={style.productDetailTableColour}>
                          <div className={style.productDetails}>
                            Item Height
                          </div>
                          <div className={style.details}>80 cm</div>
                        </div>
                        <div className={style.productDetailTable}>
                          <div className={style.productDetails}>
                            Item Weight
                          </div>
                          <div className={style.details}>50 kg</div>
                        </div>
                        <div className={style.productDetailTableColour}>
                          <div className={style.productDetails}>
                            Upholstery Material
                          </div>
                          <div className={style.details}>Fabric</div>
                        </div>
                        <div className={style.productDetailTable}>
                          <div className={style.productDetails}>Features</div>
                          <div className={style.details}>3-seater, Modular</div>
                        </div>
                        <div className={style.productDetailTableColour}>
                          <div className={style.productDetails}>
                            Manufacturer
                          </div>
                          <div className={style.details}>
                            <div className={style.manufacturerDetails}>
                              <div>Brand:</div>
                              <div>Freedom Furniture</div>
                            </div>
                            <div className={style.manufacturerDetails}>
                              <div>Make:</div>
                              <div>Mario</div>
                            </div>
                            <div className={style.manufacturerDetails}>
                              <div>Model:</div>
                              <div>Bellini</div>
                            </div>
                          </div>
                        </div>
                        <div className={style.productDetailTable}>
                          <div className={style.productDetails}>
                            Year Manufactured
                          </div>
                          <div className={style.details}>2010</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Overlay>
              )}
              <img
                className={style.icon}
                src="/assets/icons/Message.svg"
                alt="message"
              />
              <img
                className={style.icon}
                src="/assets/icons/Share.svg"
                alt="share"
              />
            </div>
          </div>
          <div className={style.placeBidCard}>
            <div className={style.placeBidCardContainer}>
              <div className={style.listingNumber}>
                Listing #: <span>123456789</span>
              </div>
              <div className={style.currentBid}>Current Bid</div>
              <div className={style.currentBidAmount}>$500.00</div>
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
                    <div>Sat 14th Sep, 8:04pm</div>
                    <img src="/assets/icons/Ellipse 434.svg" alt="dot" />
                    <div>1d 10h</div>
                  </div>
                </div>
              </div>
              <button
                className={style.placeBidBtn}
                onClick={() => setIsOverlayPlaceBidOpen(!isOverlayPlaceBidOpen)}
              >
                <img src="/assets/icons/Group 65.svg" alt="place-bid" />
                <div className={style.placeBid}>Place Bid</div>
              </button>
              {isOverlayPlaceBidOpen && (
                <Overlay onClose={() => setIsOverlayPlaceBidOpen(false)}>
                  <div>
                    <div className={style.overlayPlaceBidHeader}>
                      Place a bid
                    </div>
                    <div className={style.overlayPlaceBidContainer}>
                      <div
                        className={
                          style.overlayPlaceBidProductDisplayBackground
                        }
                      >
                        <div
                          className={
                            style.overlayPlaceBidProductDisplayContainer
                          }
                        >
                          <img
                            className={style.overlayImg}
                            src="/images/sofa-3seater.png"
                            alt="Image"
                          />
                          <div className={style.overlayPlaceBidListingDetails}>
                            <div className={style.overlayPlaceBidListingName}>
                              Modular Sofa / 3-seater
                            </div>
                            <div
                              className={style.overlayPlaceBidListingCondition}
                            >
                              <div>Condition:</div>
                              <div>Used - Excellent Condition</div>
                              <img
                                className={style.icon}
                                src="/assets/icons/Group 71.svg"
                                alt="Help"
                              />
                            </div>
                            <div
                              className={style.overlayPlaceBidAmountContainer}
                            >
                              <div>
                                <div>Current Bid:</div>
                                <div
                                  className={
                                    style.overlayPlaceBidAmountCurrentNBuyNowDisplay
                                  }
                                >
                                  $500.00
                                </div>
                              </div>
                              <div>
                                <div>Buy Now:</div>
                                <div
                                  className={
                                    style.overlayPlaceBidAmountCurrentNBuyNowDisplay
                                  }
                                >
                                  $850.00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form
                        className={style.overlayPlaceBidInputProcessContainer}
                      >
                        <div className={style.overlayPlaceBidInputHeader}>
                          {bidText}
                        </div>
                        <div className={style.overlayPlaceBidOptionsContainer}>
                          <input
                            className={style.overlayPlaceBidInputAmount}
                            type="text"
                            placeholder="$500.00"
                          />
                          <div className={style.overlayPlaceBidOptions}>
                            <input
                              type="checkbox"
                              onChange={() =>
                                setIsAutoBidCheck(!isAutoBidCheck)
                              }
                            />
                            <div>Auto-bid</div>
                            <div
                              className={style.overPlaceBidMoreInfoContainer}
                            >
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
                            <input type="checkbox" />
                            <div>
                              <div>Buyer must pick-up*</div>
                              <div>
                                Seller is located in Auckland Central, Auckland
                              </div>
                            </div>
                          </div>
                          <div>*Required fields</div>
                        </div>
                      </form>
                      <div className={style.overlayPlaceBidBtnContainer}>
                        <button className={style.overlayPlaceBidReviewBidBtn}>
                          <img
                            src="/assets/icons/Group 65.svg"
                            alt="place-bid"
                          />
                          <div>{reviewAutoBid}</div>
                        </button>
                        <div className={style.overlayPlaceBidGoBack} onClick={() => setIsOverlayPlaceBidOpen(false)}>
                          Go back to listing
                        </div>
                      </div>
                    </div>
                  </div>
                </Overlay>
              )}
              <div className={style.howToPlaceBid}>How to place a bid</div>
              <div className={style.middleLine}>
                <div className={style.lineShort}></div>
                <div className={style.middleOr}>OR</div>
                <div className={style.lineShort}></div>
              </div>
              <div className={style.buyNow}>Buy Now</div>
              <div className={style.buyNowAmount}>$850.00</div>
              <button className={style.buyNowBtn}>
                <img src="/assets/icons/Shopping Cart.png" alt="cart" />
                <div className={style.buyNowFont}>Buy Now</div>
              </button>
              <div className={style.lineLong}></div>
              <div className={style.offerNWatchlistContainer}>
                <div className={style.offerContainer}>
                  <div className={style.offerInfo}>
                    The Seller is open to offers on this listings
                  </div>
                  <button className={style.offerBtn}>Make an offer</button>
                </div>
                <div className={style.watchlistContainer}>
                  <div className={style.watchlistInfo}>
                    Not sure? Add to{" "}
                    <span className={style.watchlistLink}>Watchlist Page</span>{" "}
                    and compare with other saved items
                  </div>
                  <button className={style.watchlistBtn}>
                    <img src="/assets/icons/Icon_mini hearts.svg" alt="heart" />
                    <div>Add to Watchlist</div>
                  </button>
                </div>
              </div>
              <div className={style.lineLong}></div>
            </div>
            <div className={style.needHelpLink}>Need Help?</div>
          </div>
          <div className={style.sellerInformationHeader}>
            Seller Information
          </div>
          <div className={style.sellerInformationCard}>
            <div className={style.sellerInfomationContainer}>
              <img src="/assets/icons/Seller.svg" alt="seller avatar" />
              <div className={style.sellerAbout}>
                <div className={style.sellerName}>Name of Seller (##)</div>
                <div className={style.sellerRating}>
                  <div>100% positive feedback</div>
                  <div className={style.seeFeedback}>See Feedback</div>
                </div>
                <div className={style.sellerAbout}>
                  Seller located in Auckland City, Auckland
                </div>
                <div className={style.sellerAbout}>
                  Member since 22 July 2016
                </div>
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
        </div>
      </div>
      <div className={style.optionalItemsCard}>
        <div className={style.aVeryLongLine}></div>
        <div>
          <div className={style.otherThingYouMightLike}>
            Other listing you might like
          </div>
          <div className={style.showListingItemsContainer}>
            <div className={style.listingCard}>
              <img src="/images/sofa-2seater.png" alt="listing item" />
              <div className={style.listingItemDetails}>
                <div className={style.listingCloses}>
                  <div>Listing closes:</div>
                  <div>Date</div>
                </div>
                <div className={style.listingLocation}>Location</div>
                <div className={style.listingName}>Item Listing Name</div>
                <div className={style.listingDescription}>Item Description</div>
                <div className={style.listingConidtion}>
                  <img src="/assets/icons/Truck.svg" alt="truck" />
                  <div>Pick up only from Auckland Central</div>
                </div>
                <div className={style.listingConidtion}>
                  <img src="/assets/icons/Shipping-Received.svg" alt="box" />
                  <div>Expected Shipping in 3-5 days</div>
                </div>
                <div className={style.listingStatus}>
                  <div>
                    <div>Current Bid:</div>
                    <div className={style.listingStatusDetails}>$500.00</div>
                  </div>
                  <div>
                    <div>Buy Now:</div>
                    <div className={style.listingStatusDetails}>$850.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.view}>
          <button className={style.viewAllBtn}>View All</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default ProductListing;
