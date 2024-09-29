import React from "react";
import style from "./ClosingTime.module.css";

export default function ClosingTime({ closing }) {
  const closingDate = new Date(closing);
  const now = new Date();
  const difference = closingDate - now;
  const totalMinutes = Math.floor(difference / 1000 / 60);
  const days = Math.floor(totalMinutes / 1440); // 1440 minutes in a day
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;

  return (
    <div className={style.closingDateNTimeContainer}>
      <img src="/assets/icons/Clock.svg" alt="clock" />
      <div>
        <div>{closing}</div>
        <div>{days} days, {hours} hrs, {minutes} mins</div>
      </div>
    </div>
  );
}
