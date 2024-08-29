"use client";
import "../styles/store.css";
import { useState } from "react";

export default function Store() {
  const [amount, setAmount] = useState(10);
  const [price, setPrice] = useState(10);

  const max = 5000;

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value > max) {
      setAmount(max);
      setPrice(max);
    } else if (value < 1) {
      setAmount(1);
      setPrice(1);
    } else {
      setAmount(value);
      setPrice(value);
    }
  };

  return (
    <>
      <h2 className="text-4xl text-left ml-5 mb-4">Купить виксы </h2>
      <div className="store  flex ">
        <input
          className="bg-black px-3 py-2 text-4xl text-right"
          type="number"
          step="1"
          min="1"
          max={max}
          value={amount}
          id="amount"
          name="amount"
          onChange={handleChange}
        />
        <input
          type="range"
          step="1"
          min="1"
          max={max}
          value={price}
          id="price"
          name="price"
          onChange={handleChange}
          className=""
        />
      </div>
    </>
  );
}
