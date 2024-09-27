"use client"
import Image from "next/image";
import * as img from "../images.js";
import usePopUpStore from "@/stores/pop_up_store";
import "../styles/pop_up_auth.css"
import useThemeStore from "@/stores/theme_store.js";
import {useState} from "react";
import useAuthStore from "@/stores/auth_store";

function signIn(nick, password, setUserAuth, event, closePopUpAuth) {
    console.log(nick, password)
    if (!nick || !password || nick === "" || password === "") return
    console.log("signin")
    fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nick: nick,
            password: password
        })
    }).then(
        async (response) => {
            if (response.ok) {
                localStorage.setItem("token", await response.text());
                closePopUpAuth();
            } else {
            }
        }
    )
}

export default function PopUpAuth() {
    const { isDarkMode } = useThemeStore((state) => state);
    const { isPopupAuthOpen, closePopUpAuth } = usePopUpStore((state) => state);
    const { userAuth, setUserAuth } = useAuthStore((state) => state);
    const [nick, setNick] = useState("");
    const [password, setPassword] = useState("");

    if (!isPopupAuthOpen) return null;

    return (

        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 ${isDarkMode ? "dark_pop_up_buy_conteiner" : "white_pop_up_buy_conteiner"}`}>
            <form className={`pop_up_buy p-2 ${isDarkMode ? "dark_pop_up_buy" : "white_pop_up_buy"}`} onSubmit={(event) => signIn(nick, password, setUserAuth, event, closePopUpAuth)}>
                <div className="flex justify-end mb-1">
                    <button className=""><Image src={img.close_button} alt="Кнопка закрытия" onClick={() => {
                        closePopUpAuth();
                    }}/>
                    </button>
                </div>
                <div className="flex items-center flex-col gap-12 mb-12">
                    <h3 className="text-2xl font-bold">Войдите в игровой аккаунт.</h3>
                    <input value={nick} type="text" placeholder="Ваш ник" onChange={(e) => setNick(e.target.value)}
                           className="w-full max-w-xs" required/>
                    <input value={password} type="password" placeholder="Пароль"
                           onChange={(e) => setPassword(e.target.value)} className="w-full max-w-xs" required/>
                </div>
                <button type="submit" className="pup_up_buy_button text-3xl font-bold">Войти</button>
            </form>
        </div>
    );
}