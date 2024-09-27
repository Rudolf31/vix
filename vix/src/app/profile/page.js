"use client"
import "../styles/globals.css";
import "../styles/main_page.css";
import "../styles/profile.css"
import * as images from "../../app/images.js";
import Image from 'next/image';
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Profile() {

    const router = useRouter();
    const [ user, setUser ] = useState(null);

    function logout() {
        localStorage.removeItem("token");
        router.push("/");
    }

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            router.push("/");
        } else {
            fetch("http://localhost:8080/api/user/getUser", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            .then(async (response) => {
                if (!response.ok) {
                    router.push("/");
                } else {
                    const data = await response.json();
                    setUser(data);
                }
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных пользователя:", error);
                router.push("/");
            });
        }
        return () => {
            setUser(null);
        };
    }, [router]);
    

    return (
        <main className="text-2xl text-start">
            <div className="flex justify-between mb-12 mt-5">
                <h2 className="nickname text-4xl font-bold" style={{letterSpacing: '3px'}}  >Ник</h2>
                <p><span className="vix_count">{user?.vixes}</span> Виксов</p>
            </div>
            <div className=" pl-5">
                <p className="mb-12">Времени в игре: <span className="time_in_game">0</span> ч.</p>
                <p className="mb-12">Виксов куплено: <span className="vix_bought">{user?.fullvixes}</span></p>
                <p className="mb-12">Текущая привелегия<span className="privilege"></span></p>
            </div>
            <div className=" mb-12">
                <h2 className="text-4xl font-bold mb-7">Статистика</h2>
                <div className="statistic_border grid md:grid-cols-2 max-md:grid-cols-1 gap-5">
                    <div className="p-5">
                        <h3 className="mb-5 text-center">Хаунд</h3>
                        <div className="grid grid-cols-2 gap-5 " >
                            <p>Уровень: <span>some shit</span></p>
                            <p>Убийств: <span>some shit</span></p>
                            <p>Баланс крон: <span>some shit</span></p>
                            <p>Сметрей: <span>some shit</span></p>
                            <p>Отряд: <span>some shit</span></p>
                        </div>
                    </div>
                    <div className="p-5">
                        <h3 className="mb-5 text-center">Аркания</h3>
                        <div className="grid grid-cols-2 gap-5">
                            <p>Уровень: <span>some shit</span></p>
                            <p>Убийств: <span>some shit</span></p>
                            <p>Захват точек: <span>some shit</span></p>
                            <p>Сметрей: <span>some shit</span></p>
                            <p>Фракция: <span>some shit</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}