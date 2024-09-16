"use client";
import "./styles/globals.css";
import Navigation from "./components/navigation"
import * as images from "../app/images.js";
import Image from 'next/image';
import PopUpAuth from "./components/pop_up_auth.js";
import useThemeStore from "../stores/theme_store.js";

export default function RootLayout({ children }) {
const { isDarkMode } = useThemeStore((state) => state);

  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap" rel="stylesheet"/>
      </head>
      <body className={isDarkMode ? "" : "body_white"}>
        <header>
          <Navigation/>
        </header>
        {children}
        <footer>
        <div className={"relative mt-8 " + (isDarkMode ? "narrowo_band" : "white_narrowo_band")}><p className=" text-left pt-5">все права защищены</p></div>
        <PopUpAuth/>
      </footer>
      </body>
    </html>
  );
}
