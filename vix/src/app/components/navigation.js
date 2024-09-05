"use client";
import Link from 'next/link';
import Image from 'next/image';
import * as images from './../images.js';
import { useEffect, useState } from 'react';
import  useAuthStore  from "@/stores/auth_store.js";
import usePopUpStore  from "@/stores/pop_up_store.js";

 

import "./../styles/navigation.css";

export default function Navigation() {
    const [currentPath, setCurrentPath, ] = useState('');
    const { userAuth, userName, setUserAuth, closeAuth, setUserName, clearUserName  } = useAuthStore();
    const { openPopUpAuth, closePopUpAuth } = usePopUpStore();
    useEffect(() => {

        setCurrentPath(window.location.pathname);
        const handleRouteChange = (url) => {
            setCurrentPath(url);
        };
        window.addEventListener('popstate', () => handleRouteChange(window.location.pathname));
        return () => {
            window.removeEventListener('popstate', () => handleRouteChange(window.location.pathname));
        };
    }, []);

    return (
        <nav className="text-2xl font-bold pt-7">
            <ul className="flex gap-2 justify-content: space-between items-center">
                <li className="flex gap-16 ml-48">
                    <Link href="/" className={currentPath === '/' ? 'active' : ''}>главная</Link>
                    <Link href="/rules" className={currentPath === '/rules' ? 'active' : ''}>правила</Link>
                </li>
                <li className="flex gap-5 ml-auto">
                <div className="flex gap-5 mr-11" style={{ alignItems: 'center' }}>
                    <button><div className='h-9 photo_nav_theme duration-100' style={{width: "65px"}}></div></button>
                    <Link href={""} className='photo_nav photo_nav_tg'></Link>
                    <Link href={""} className='photo_nav photo_nav_ds'></Link>
                    <Link href={""} className='photo_nav photo_nav_vk'></Link>
                </div>
                {userAuth ? (
                    <Link href={""} className="profile align-middle mr-5">профиль</Link>
                ) : (
                    <button href={""} onClick={openPopUpAuth}  className=" align-middle mr-5">Войти</button>
                )}
                </li>
            </ul>
        </nav>
    );
}
