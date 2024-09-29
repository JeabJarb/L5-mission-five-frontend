import React from "react";
import style from "./Description.module.css";

export default function Description({ description }) {
  return (
    <div className={style.productDescription}>{description}</div>
  );
}
