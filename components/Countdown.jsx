"use client";
import React, { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = new Date("2026-01-17T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(
    targetDate - Date.now()
  );

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const h = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const m = Math.floor((timeLeft / (1000 * 60)) % 60);
  const s = Math.floor((timeLeft / 1000) % 60);

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {d}d : {h}h : {m}m : {s}s
    </span>
  );
};

export default CountDown;
