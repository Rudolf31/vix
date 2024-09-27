"use client"; // Убедитесь, что вы используете "use client" в начале файла
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as img from "../images.js";
import { usePathname } from 'next/navigation'; // Импортируйте usePathname
import useAuthStore from "@/stores/auth_store.js";
import usePopUpStore from "@/stores/pop_up_store.js";
import useThemeStore from "@/stores/theme_store.js";
import useWindowWidthStore from "@/stores/window_width_store.js"; // Исправленный импорт

import "./../styles/navigation.css";

export default function Navigation() {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState(pathname);
    const { userAuth, setUserAuth } = useAuthStore((state) => state);
    const { closeAuth } = useAuthStore((state) => state);
    const { isDarkMode, setDarkModeTrue, setDarkModeFalse } = useThemeStore((state) => state);
    const { openPopUpAuth } = usePopUpStore((state) => state);
    const { windowWidth, setWindowWidth } = useWindowWidthStore((state) => ({
        windowWidth: state.windowWidth,
        setWindowWidth: state.setWindowWidth,
    }));

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setWindowWidth]);

    useEffect(() => {
        setCurrentPath(pathname);
        console.log("Current Path:", pathname); 
    }, [pathname]);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            fetch("http://localhost:8080/api/user/isTokenValid", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }).then((response) => {
                if (!response.ok) {
                    localStorage.removeItem("token");
                    closeAuth();
                } else {
                    setUserAuth();
                }
            });
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    console.log(userAuth)

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
                <div className='flex justify-between'>
                    <div className="">
                        <button onClick={toggleMenu} className="ml-4 menu-button">
                            <Image src={img.menu_nav} width={30} alt="menu"/>
                        </button>
                    </div>
                    {isMenuOpen && (
                        <ul className="flex flex-col items-center">
                            <li className="">
                                <Link href="/" className={currentPath === '/' ? 'active' : ''}><span>главная</span></Link>
                            </li>
                            <li className="">
                                <Link href="/rules" className={currentPath === '/rules' ? 'active' : ''}><span>правила</span></Link>
                            </li>
                            <li className="">
                                {userAuth ? (
                                    <Link href={"/profile"} className={(currentPath === '/profile' ? 'active' : '')}>
                                        <span>профиль</span>
                                    </Link>
                                ) : (
                                    <button onClick={openPopUpAuth} className="">войти</button>
                                )}
                            </li>
                        </ul>
                    )}
                    <div className="mr-4">
                        <button onClick={isDarkMode ? setDarkModeFalse : setDarkModeTrue}>
                            <div className={isDarkMode ? "photo_nav photo_nav_theme" : "photo_nav photo_nav_theme_white"} style={{ width: "65px" }}></div>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
