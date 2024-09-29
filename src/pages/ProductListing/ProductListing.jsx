import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";
import Breadcrumb from "../../common/Breadcrumb";
import Footer from "../../common/Footer";
import style from "./ProductListing.module.css";
import OtherListing from "./components/OtherListing";
import QuestionAndAnswer from "./components/QuestionAndAnswer";
import ProductDetailsCard from "./components/ProductDetailsCard";
import ProductShippingDetailsCard from "./components/ProductShippingDetailsCard";
import ProductName from "./components/ProductName";
import { useParams } from "react-router";
import ImageDisplay from "./components/ImageDisplay";
import Description from "./components/Description";
import ProductCondition from "./components/ProductCondition";
import ClosingTime from "./components/ClosingTime";
import CurrentBid from "./components/CurrentBid";
import BuyNow from "./components/BuyNow";
import SellerDetailsCard from "./components/SellerDetailsCard";
import PlaceBid from "./components/PlaceBid";

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
  const { id } = useParams();

  const [isOverlayListingDetailsOpen, setIsOverlayListingDetailsOpen] =
    useState(false);
  const [isOverlayPlaceBidOpen, setIsOverlayPlaceBidOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 products

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Increase the count by 4
  };

  const toggleOverlayListingDetails = () => {
    setIsOverlayListingDetailsOpen(true); // explicitly set true when opening
  };
  const closeOverlayListingDetails = () => {
    setIsOverlayListingDetailsOpen(false); // explicitly set false when closing
  };

  const toggleOverlayPlaceBid = () => {
    setIsOverlayPlaceBidOpen(true); // explicitly set true when opening
  };
  const closeOverlayPlaceBid = () => {
    setIsOverlayPlaceBidOpen(false); // explicitly set false when closing
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4000/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchOtherProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:4000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setOtherProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOtherProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div>
      <Navbar />
      <Breadcrumb
        items={[
          { path: "/", label: "Home" },
          { path: "/marketplace", label: "Marketplace" },
          { path: "/home-and-living", label: "Home & Living" },
          { path: "/lounge-dining-and-hall", label: "Lounge Dining & Hall" },
          { path: "/product-listing", label: "Product" },
        ]}
      />

      <div className={style.productListingContainer}>
        <div className={style.aboutProdctContainer}>
          {loading && <div>Loading...</div>}
          {error && <p>Error: {error}</p>}
          <div>
            <div>
              <ImageDisplay images={product.image} name={product.name} />
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
                          <ProductDetailsCard
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
                    <ProductDetailsCard
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
                  </div>

                  <div className={style.productDetialsHeader}>
                    Shipping, Returns, Payment
                  </div>

                  <ProductShippingDetailsCard
                    shipping={product.shipping.shipping}
                    returns={product.shipping.returns}
                    payment={product.shipping.payment}
                  />

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

                  <Description description={product.description} />

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
            <ProductName name={product.name} />

            <ProductCondition condition={product.product_details.condition} />
            <div className={style.closingDateNIconsContainer}>
              <ClosingTime closing={product.closingDate} />
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
                    <div>
                      <div className={style.overlayProductHeader}>
                        Product Detials
                      </div>
                      <ProductDetailsCard
                        condition={product.product_details.condition}
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
                <CurrentBid
                  listingNumber={product.listing_id}
                  currentBid={product.current_bid}
                  closing={product.closingDate}
                />
                <button
                  className={style.placeBidBtn}
                  onClick={toggleOverlayPlaceBid}
                >
                  <img src="/assets/icons/Group 65.svg" alt="place-bid" />
                  <div className={style.placeBid}>Place Bid</div>
                </button>
                {isOverlayPlaceBidOpen && (
                  <Overlay onClose={closeOverlayPlaceBid}>
                    <PlaceBid
                      id={product.listing_id}
                      currentBid={product.current_bid}
                      buyNow={product.buy_now}
                      listingId={product.listing_id}
                      image={product.image[0]}
                      name={product.name}
                      condition={product.product_details.condition}
                    />
                  </Overlay>
                )}
                <div className={style.howToPlaceBid}>How to place a bid</div>
                <div className={style.middleLine}>
                  <div className={style.lineShort}></div>
                  <div className={style.middleOr}>OR</div>
                  <div className={style.lineShort}></div>
                </div>
                <BuyNow buyNow={product.buy_now} />
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
            <SellerDetailsCard />
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
              user.user_product_listings
                .slice(0, visibleCount)
                .map((product) => (
                  <OtherListing
                    key={product.id}
                    id={product.listing_id}
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
        {visibleCount <
          otherProducts.reduce(
            (acc, user) => acc + user.user_product_listings.length,
            0
          ) && (
          <div className={style.view}>
            <button className={style.viewMoreBtn} onClick={handleViewMore}>
              View More
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
export default ProductListing;
