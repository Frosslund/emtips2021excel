import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DateCountdown from "react-date-countdown-timer";

const BeforeView = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-06-14T21:00:00+02:00"); // Central European Time
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div className="start-page">
      <div className="countdown">
        <h2>NEDRÄKNING</h2>
        <div style={{ fontSize: "1.0em" }}>
          {timeLeft.days != null ? timeLeft.days : "00"}:
          {timeLeft.hours != null
            ? timeLeft.hours.toString().padStart(2, "0")
            : "00"}
          :
          {timeLeft.minutes != null
            ? timeLeft.minutes.toString().padStart(2, "0")
            : "00"}
          :
          {timeLeft.seconds != null
            ? timeLeft.seconds.toString().padStart(2, "0")
            : "00"}
        </div>
        <NavLink to="/regler">
          <p style={{ fontSize: "0.1em", color: "white" }}>
            Se regler & instruktioner
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default BeforeView;
