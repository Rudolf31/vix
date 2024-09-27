"use client";
import "./styles/globals.css";
import Navigation from "./components/navigation";
import PopUpAuth from "./components/pop_up_auth.js";
import useThemeStore from "../stores/theme_store.js";
import useWindowWidthStore from "@/stores/window_width_store.js"; // Исправленный импорт
import Link from "next/link";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const { isDarkMode, setDarkModeTrue, setDarkModeFalse } = useThemeStore((state) => state);
  const { windowWidth, setWindowWidth } = useWindowWidthStore((state) => (state));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWindowWidth]); // добавляем зависимость от setWindowWidth


  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials"/>
        <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap" rel="stylesheet"/>
          <title></title>
      </head>
      <body className={isDarkMode ? "" : "body_white"}>
        <header>
          <Navigation/>
        </header>
        {children}
        <footer>
        <div className={"relative mt-8 " + (isDarkMode ? "narrowo_band" : "white_narrowo_band")}><p className=" text-left pt-5">все права защищены</p></div>
        { 
        windowWidth > 768 ? null :
          (<div className="flex justify-between">
            <Link href="https://t.me/vixbot" className='photo_nav photo_nav_tg' target="_blank" rel="noopener noreferrer"></Link>
            <Link href="https://discord.gg/5KfWjCUz4V" className='photo_nav photo_nav_ds' target="_blank" rel="noopener noreferrer"></Link>
            <Link href="https://vk.com/vixbot" className='photo_nav photo_nav_vk' target="_blank" rel="noopener noreferrer"></Link>
        </div>
          )
        }
          <PopUpAuth/>
        </footer>
      </body>
    </html>
  );
}
