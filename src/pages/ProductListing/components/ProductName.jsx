import React from "react";
import style from "./ProductName.module.css";

export default function ProductName({name}) {
  return <div className={style.frontHeader}>{name}</div>;
}
