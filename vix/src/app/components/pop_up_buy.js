"use client"
import "../styles/pop_up_buy.css";
import { useState } from "react";
import Image from "next/image";
import * as img from "../images.js";
export default function PopUpBuy() {
    const [payment_method, serPayment_method] = useState(true);

    return (
        <>
            <div className="pop_up_buy w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2">
                <div className="flex justify-end mb-8">
                    <button className=""><Image src={img.close_button}/> </button>
                </div>
                {payment_method 
                ?
                <div className="flex items-center flex-col gap-12 mb-12">
                    <input type="text" placeholder="Ваш ник"  className="w-full max-w-xs" required/>
                    <input type="email" placeholder="Почта для отправки чека" className="w-full max-w-xs" required/>
                    <input type="text" placeholder="Промокод (при налиичии)" className="w-full max-w-xs"/>
                </div>
                : 
                <div className="flex justify-center">
                    
                </div>
                }
                {payment_method
                ?
                <button className="text-3xl font-bold">Далее</button>
                :
                <button className="text-3xl font-bold">Оплатить</button>
                }
            </div>
        </>
    );
}