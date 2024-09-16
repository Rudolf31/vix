"use client";
import "../styles/store.css";
import { useState } from "react";
import Image from "next/image";
import * as img from "../images.js";
import usePopUpStore from "@/stores/pop_up_store";
import useAuthStore from '@/stores/auth_store.js';
import useThemeStore from "@/stores/theme_store.js";

export default function Store() {
  const [amount, setAmount] = useState(10);
  const [price, setPrice] = useState(10);
  const { openPopup } = usePopUpStore();
  const { userAuth } = useAuthStore();
  const { isDarkMode } = useThemeStore();


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
    <div>
      <h2 className="text-4xl text-left ml-5 font-bold">Купить виксы </h2>
      <div className="relative mt-8 div_wide_band">
        <Image src={img.wide_band} alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} className="wide_band" />
      </div>
      <div className="store flex flex-wrap items-center md:gap-24
      max-md:gap-8">
        <input
          className={"px-2 py-1 text-4xl text-right font-bold pl-14 " + (isDarkMode ? "dark_input-box" : " white_input-box")}
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
          className="scrollbar md:block hidden"
        />
        <button className={"btn-buy text-4xl font-bold" + (isDarkMode ? "" : " white_btn-buy")} onClick={() => {
          if (userAuth) {
            openPopup();
          } else {
            alert('Вы должны быть авторизованы, чтобы купить виксы');
          }
        }}>купить</button>
      </div>
    </div>
  );
}
