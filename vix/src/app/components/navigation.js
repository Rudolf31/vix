"use client"; // Убедитесь, что вы используете "use client" в начале файла
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Импортируйте usePathname
import useAuthStore from "@/stores/auth_store.js";
import usePopUpStore from "@/stores/pop_up_store.js";

import "./../styles/navigation.css";

export default function Navigation() {
    const pathname = usePathname(); // Получите текущий путь
    const [currentPath, setCurrentPath] = useState(pathname); // Установите начальное значение
    const { userAuth, openPopUpAuth } = useAuthStore();

    useEffect(() => {
        setCurrentPath(pathname); // Обновите currentPath при изменении pathname
        console.log("Current Path:", pathname); // Проверка текущего пути
    }, [pathname]); // Зависимость от pathname

    return (
        <nav className="text-2xl font-bold pt-7">
            <ul className="flex gap-2 justify-content: space-between items-center">
                <li className="flex gap-16 ml-48">
                    <Link href="/" className={currentPath === '/' ? 'active' : ''}><span>главная</span></Link>
                    <Link href="/rules" className={currentPath === '/rules' ? 'active' : ''}><span>правила</span></Link>
                </li>
                <li className="flex gap-5 ml-auto">
                    <div className="flex gap-5 mr-11" style={{ alignItems: 'center' }}>
                        <button><div className='h-9 photo_nav_theme duration-100' style={{width: "65px"}}></div></button>
                        <Link href={""} className='photo_nav photo_nav_tg'></Link>
                        <Link href={""} className='photo_nav photo_nav_ds'></Link>
                        <Link href={""} className='photo_nav photo_nav_vk'></Link>
                    </div>
                    {userAuth ? (
                        <Link href={"/profile"} className={"profile align-middle mr-5 " + (currentPath === '/profile' ? 'active' : '')}>
                            <span>профиль</span>
                        </Link>
                    ) : (
                        <button onClick={openPopUpAuth} className="align-middle mr-5">Войти</button>
                    )}
                </li>
            </ul>
        </nav>
    );
}
