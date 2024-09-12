"use client"
import "../styles/pop_up_buy.css";
import Image from "next/image";
import * as img from "../images.js";
import usePopUpStore from "@/stores/pop_up_store";
import useThemeStore from "@/stores/theme_store.js";

export default function PopUpBuy() {
    const { isDarkMode } = useThemeStore((state) => state);
    const { isPopupOpen, closePopup } = usePopUpStore();


    if (!isPopupOpen) return null;

    return (
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 ${isDarkMode ? "dark_pop_up_buy_conteiner" : "white_pop_up_buy_conteiner"}`}>
            <form className={`pop_up_buy p-2 ${isDarkMode ? "dark_pop_up_buy" : "white_pop_up_buy"}`}>
                <div className="flex justify-end mb-8">
                    <button className="" ><Image src={img.close_button} alt="Кнопка закрытия" onClick={() => {
                        closePopup();
                        }} /> 
                    </button>
                </div>
                <div className="flex items-center flex-col gap-12 mb-12">
                    <input type="text" placeholder="Ваш ник"  className="w-full max-w-xs" required/>
                    <input type="email" placeholder="Почта для отправки чека" className="w-full max-w-xs" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Введите корректную почту"/>
                    <input type="text" placeholder="Промокод (при налиичии)" className="w-full max-w-xs"/>
                </div>
                <button className="pup_up_buy_button text-3xl font-bold" onClick={() => {
                    const requiredInputs = document.querySelectorAll('input[required]');
                    const isAllInputsValid = Array.from(requiredInputs).every(input => {
                        if (input.type === 'email') {
                            const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                            return re.test(input.value);
                        }
                        return input.value.trim() !== '';
                    });
                    if (isAllInputsValid) {
                        setPayment_method(false);
                    } else {
                        alert('Пожалуйста, введите корректные данные');
                    }
                  }}>Далее</button>
            </form>
        </div>
    );
}