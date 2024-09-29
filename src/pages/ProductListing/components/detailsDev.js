const detailsDiv = (
    <div>
      <div className={style.overlayProductHeader}>Product Details</div>
      {productListingItem.map((user, userIndex) =>
        user.user_product_listings.map((product, productIndex) => (
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
        ))
      )}
    </div>
  );