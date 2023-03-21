import React, { useState, useEffect } from "react";

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, [date]);

  return (
    <div className="title">
      <h2>Realtime Clock</h2>
      <hr />
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
};
