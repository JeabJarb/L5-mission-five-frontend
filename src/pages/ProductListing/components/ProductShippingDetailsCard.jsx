import React from "react";
import style from "./ProductShippingDetailsCard.module.css";

export default function ProductShippingDetailsCard({ shipping, returns, payment }) {
  return (
    <div>
      <div className={style.shippingDetailsContainer}>
        <div className={style.detailTableColour}>
          <div className={style.detailsContainer}>Shipping</div>
          <div className={style.details}>{shipping}</div>
        </div>
        <div className={style.detailTable}>
          <div className={style.detailsContainer}>Returns</div>
          <div className={style.details}>{returns}</div>
        </div>
        <div className={style.detailTableColour}>
          <div className={style.detailsContainer}>Payment</div>
          <div className={style.details}>{payment}</div>
        </div>
      </div>
    </div>
  );
}