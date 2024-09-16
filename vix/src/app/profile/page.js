import "../styles/globals.css";
import "../styles/main_page.css";
import "../styles/profile.css"
import * as images from "../../app/images.js";
import Image from 'next/image';

export default function Profile() {
    return (
        <main className="text-2xl text-start">
            <div className="flex justify-between mb-12 mt-5">
                <h2 className="nickname text-4xl font-bold" style={{letterSpacing: '3px'}}  >Ник</h2>
                <p><span className="vix_count">456</span> Виксов</p>
            </div>
            <div className=" pl-5">
                <p className="mb-12">Времени в игре: <span className="time_in_game">523</span> ч.</p>
                <p className="mb-12">Виксов куплено: <span className="vix_bought">1000</span></p>
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