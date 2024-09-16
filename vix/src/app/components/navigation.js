"use client"; // Убедитесь, что вы используете "use client" в начале файла
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Импортируйте usePathname
import useAuthStore from "@/stores/auth_store.js";
import usePopUpStore from "@/stores/pop_up_store.js";
import useThemeStore from "@/stores/theme_store.js";

import "./../styles/navigation.css";

export default function Navigation() {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState(pathname);
    const { userAuth } = useAuthStore((state) => state);
    const { isDarkMode, setDarkModeTrue, setDarkModeFalse } = useThemeStore((state) => state);
    const { openPopUpAuth } = usePopUpStore((state) => state);

    const [windowWidth, setWindowWidth] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления видимостью меню

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setCurrentPath(pathname);
        console.log("Current Path:", pathname); 
    }, [pathname]); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Переключаем состояние меню
    };

    return (
        <nav className="text-2xl font-bold pt-7 text-white">
            {windowWidth > 768 ? (
                <ul className="grid grid-cols-2 items-center w-full">
                    <li className="flex lg:gap-16 max-lg:gap-10 lg:justify-self-center max-lg:justify-self-start max-lg:ml-3">
                        <Link href="/" className={currentPath === '/' ? 'active' : ''}><span>главная</span></Link>
                        <Link href="/rules" className={currentPath === '/rules' ? 'active' : ''}><span>правила</span></Link>
                    </li>
                    <li className="flex gap-5 justify-self-end">
                        <div className="flex gap-5 mr-11" style={{ alignItems: 'center' }}>
                            <button onClick={isDarkMode ? setDarkModeFalse : setDarkModeTrue}>
                                <div className={isDarkMode ? "photo_nav photo_nav_theme" : "photo_nav photo_nav_theme_white"} style={{ width: "65px" }}></div>
                            </button>
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
            ) : (
                <div>
                    <button onClick={toggleMenu} className="mb-4">Меню</button>
                    {isMenuOpen && (
                        <ul className="flex flex-col items-center w-full">
                            <li className="flex lg:gap-16 max-lg:gap-10 lg:justify-self-center max-lg:justify-self-start max-lg:ml-3">
                                <Link href="/" className={currentPath === '/' ? 'active' : ''}><span>главная</span></Link>
                                <Link href="/rules" className={currentPath === '/rules' ? 'active' : ''}><span>правила</span></Link>
                            </li>
                            <li className="flex gap-5 justify-self-end">
                                <div className="flex gap-5 mr-11" style={{ alignItems: 'center' }}>
                                    <button onClick={isDarkMode ? setDarkModeFalse : setDarkModeTrue}>
                                        <div className={isDarkMode ? "photo_nav photo_nav_theme" : "photo_nav photo_nav_theme_white"} style={{ width: "65px" }}></div>
                                    </button>
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
                    )}
                </div>
            )}
        </nav>
    );
}
