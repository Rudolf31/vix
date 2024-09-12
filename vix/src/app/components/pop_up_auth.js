"use client"
import Image from "next/image";
import * as img from "../images.js";
import usePopUpStore from "@/stores/pop_up_store";
import "../styles/pop_up_auth.css"
import useThemeStore from "@/stores/theme_store.js";



export default function PopUpAuth() {
    const { isDarkMode } = useThemeStore((state) => state);
    const { isPopupAuthOpen, closePopUpAuth } = usePopUpStore((state) => state);

    if (!isPopupAuthOpen) return null;

    return (

        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 ${isDarkMode ? "dark_pop_up_buy_conteiner" : "white_pop_up_buy_conteiner"}`}>
            <form className={`pop_up_buy p-2 ${isDarkMode ? "dark_pop_up_buy" : "white_pop_up_buy"}`}>
                <div className="flex justify-end mb-1">
                    <button className="" ><Image src={img.close_button} alt="Кнопка закрытия" onClick={() => {
                        closePopUpAuth();
                        }} /> 
                    </button>
                </div>
                <div className="flex items-center flex-col gap-12 mb-12">
                    <h3 className="text-2xl font-bold">Если у Вас ещё нет аккаунта, зарегистрируйтесь на ...</h3>
                    <input type="text" placeholder="Ваш ник"  className="w-full max-w-xs" required/>
                    <input type="password" placeholder="Пароль" className="w-full max-w-xs" required/>
                </div>
                <button className="pup_up_buy_button text-3xl font-bold">Войти</button>
            </form>
        </div>
    );
}