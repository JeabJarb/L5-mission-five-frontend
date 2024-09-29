<div className={style.productListingContainer}>
        <div className={style.aboutProdctContainer}>
          {/* {loading && <div>Loading...</div>}
          {error && <p>Error: {error}</p>} */}
          <div>
            <div>
              {product && product.length > 0 ? (
                product.map((user, userIndex) =>
                  user.user_product_listings.map((product, productIndex) => (
                    <ImageDisplay
                      key={`${userIndex}-${productIndex}`}
                      image={product.image[0]}
                      name={product.name}
                    />
                  ))
                )
              ) : (
                <div>No products available</div>
              )}
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
                          {product.map((user, userIndex) =>
                            user.user_product_listings.map(
                              (product, productIndex) => (
                                <ProductDetailsCard
                                  key={`${userIndex}-${productIndex}`} // Unique key based on index
                                  condition={product.product_details.condition} // Using the first image from the array
                                  colour={product.product_details.colour}
                                  length={product.product_details.item_length}
                                  width={product.product_details.item_width}
                                  height={product.product_details.item_height}
                                  weight={product.product_details.item_weight}
                                  material={product.product_details.material}
                                  features={product.product_details.features}
                                  brand={
                                    product.product_details.manufacturer.brand
                                  }
                                  make={
                                    product.product_details.manufacturer.make
                                  }
                                  model={
                                    product.product_details.manufacturer.model
                                  }
                                  yearMade={product.product_details.year_made}
                                />
                              )
                            )
                          )}
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
                    {product.map((user, userIndex) =>
                      user.user_product_listings.map(
                        (product, productIndex) => (
                          <ProductDetailsCard
                            key={`${userIndex}-${productIndex}`} // Unique key based on index
                            condition={product.product_details.condition} // Using the first image from the array
                            colour={product.product_details.colour}
                            length={product.product_details.item_length}
                            width={product.product_details.item_width}
                            height={product.product_details.item_height}
                            weight={product.product_details.item_weight}
                            material={product.product_details.material}
                            features={product.product_details.features}
                            brand={product.product_details.manufacturer.brand}
                            make={product.product_details.manufacturer.make}
                            model={product.product_details.manufacturer.model}
                            yearMade={product.product_details.year_made}
                          />
                        )
                      )
                    )}
                  </div>

                  <div className={style.productDetialsHeader}>
                    Shipping, Returns, Payment
                  </div>
                  {product.map((user, userIndex) =>
                    user.user_product_listings.map((product, productIndex) => (
                      <ProductShippingDetailsCard
                        key={`${userIndex}-${productIndex}`} // Unique key based on index
                        shipping={product.shipping.shipping}
                        returns={product.shipping.returns}
                        payment={product.shipping.payment}
                      />
                    ))
                  )}
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
                  {product.map((user, userIndex) =>
                    user.user_product_listings.map((product, productIndex) => (
                      <Description
                        key={`${userIndex}-${productIndex}`} // Unique key based on index
                        description={product.description}
                      />
                    ))
                  )}
                  {/* QUESTION AND ANSWER */}
                  <div className={style.questionContainer}>
                    <QuestionAndAnswer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={style.placeBidContainer}>
            {product.map((user, userIndex) =>
              user.user_product_listings.map((product, productIndex) => (
                <ProductName
                  key={`${userIndex}-${productIndex}`} // Unique key based on index
                  name={product.name}
                />
              ))
            )}
            <div>
              <div className={style.conditionRight}>
                Condition:{" "}
                <span>item.user_product_listings[0].product_details</span>{" "}
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
                  <Overlay
                    onClose={() => setIsOverlayListingDetailsOpen(false)}
                  >
                    {product.map((user, userIndex) =>
                      user.user_product_listings.map(
                        (product, productIndex) => (
                          <ProductDetailsCard
                            key={`${userIndex}-${productIndex}`} // Unique key based on index
                            condition={product.product_details.condition} // Using the first image from the array
                            colour={product.product_details.colour}
                            length={product.product_details.item_length}
                            width={product.product_details.item_width}
                            height={product.product_details.item_height}
                            weight={product.product_details.item_weight}
                            material={product.product_details.material}
                            features={product.product_details.features}
                            brand={product.product_details.manufacturer.brand}
                            make={product.product_details.manufacturer.make}
                            model={product.product_details.manufacturer.model}
                            yearMade={product.product_details.year_made}
                          />
                        )
                      )
                    )}
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
                  onClick={() =>
                    setIsOverlayPlaceBidOpen(!isOverlayPlaceBidOpen)
                  }
                >
                  <img src="/assets/icons/Group 65.svg" alt="place-bid" />
                  <div className={style.placeBid}>Place Bid</div>
                </button>
                {isOverlayPlaceBidOpen && (
                  <Overlay onClose={() => setIsOverlayPlaceBidOpen(false)}>
                    {/* placeBidDiv */}
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
                      <span className={style.watchlistLink}>
                        Watchlist Page
                      </span>{" "}
                      and compare with other saved items
                    </div>
                    <button className={style.watchlistBtn}>
                      <img
                        src="/assets/icons/Icon_mini hearts.svg"
                        alt="heart"
                      />
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
      </div>
      <div className={style.optionalItemsCard}>
        <div className={style.aVeryLongLine}></div>
        <div>
          <div className={style.otherThingYouMightLike}>
            Other listing you might like
          </div>
          <div className={style.showListingItemsContainer}>
            {otherProducts.map((user) =>
              user.user_product_listings.map((product) => (
                <OtherListing
                  key={product.id}
                  id={product.id}
                  image={product.image[0]}
                  closingDate={product.closingDate}
                  name={product.name}
                  location={`${user.user_location.area}, ${user.user_location.city}`}
                  condition={product.product_details.condition}
                  shipping={product.shipping.shipping}
                  currentBid={product.current_bid}
                  buyNow={product.buy_now}
                />
              ))
            )}
          </div>
        </div>
        <div className={style.view}>
          <button className={style.viewAllBtn}>View All</button>
        </div>
      </div>