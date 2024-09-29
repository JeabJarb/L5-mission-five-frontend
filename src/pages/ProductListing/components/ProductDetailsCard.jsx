import React from "react";
import style from "./ProductDetailsCard.module.css";

export default function ProductDetailsCard({
  condition,
  colour,
  length,
  width,
  height,
  weight,
  material,
  features,
  brand,
  make,
  model,
  yearMade,
}) {
  return (
    <div>
      <div className={style.detailsContainer}>
        <div className={style.productDetailTableColour}>
          <div className={style.productDetailsContainer}>Condition</div>
          <div className={style.details}>{condition}</div>
        </div>
        <div className={style.productDetailTable}>
          <div className={style.productDetailsContainer}>Colour</div>
          <div className={style.details}>{colour}</div>
        </div>
        <div className={style.productDetailTableColour}>
          <div className={style.productDetailsContainer}>Item Length</div>
          <div className={style.details}>{length} cm</div>
        </div>
        <div className={style.productDetailTable}>
          <div className={style.productDetailsContainer}>Item Width</div>
          <div className={style.details}>{width} cm</div>
        </div>
        <div className={style.productDetailTableColour}>
          <div className={style.productDetailsContainer}>Item Height</div>
          <div className={style.details}>{height} cm</div>
        </div>
        <div className={style.productDetailTable}>
          <div className={style.productDetailsContainer}>Item Weight</div>
          <div className={style.details}>{weight} kg</div>
        </div>
        <div className={style.productDetailTableColour}>
          <div className={style.productDetailsContainer}>
            Upholstery Material
          </div>
          <div className={style.details}>{material}</div>
        </div>
        <div className={style.productDetailTable}>
          <div className={style.productDetailsContainer}>Features</div>
          <div className={style.details}>{features}</div>
        </div>
        <div className={style.productDetailTableColour}>
          <div className={style.productDetailsContainer}>Manufacturer</div>
          <div className={style.details}>
            <div className={style.manufacturerDetails}>
              <div>Brand:</div>
              <div>{brand}</div>
            </div>
            <div className={style.manufacturerDetails}>
              <div>Make:</div>
              <div>{make}</div>
            </div>
            <div className={style.manufacturerDetails}>
              <div>Model:</div>
              <div>{model}</div>
            </div>
          </div>
        </div>
        <div className={style.productDetailTable}>
          <div className={style.productDetailsContainer}>Year Manufactured</div>
          <div className={style.details}>{yearMade}</div>
        </div>
      </div>
    </div>
  );
}
