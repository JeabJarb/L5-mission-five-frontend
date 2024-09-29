import React from "react";
import style from "./BuyNow.module.css";

export default function BuyNow({ buyNow }) {

  return (
    <>
      <div className={style.buyNow}>Buy Now</div>
      <div className={style.buyNowAmount}>${buyNow}</div>
    </>
  );
}