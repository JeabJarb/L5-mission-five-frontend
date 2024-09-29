import React from "react";
import style from "./ProductCondition.module.css";

export default function ProductCondition({ condition }) {
  return (
    <div>
      <div className={style.condition}>
        Condition: <span>{condition}</span>{" "}
        <img
          className={style.icon}
          src="/assets/icons/Group 71.svg"
          alt="help"
        />
      </div>
    </div>
  );
}
