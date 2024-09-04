"use client";
import Link from 'next/link';
import Image from 'next/image';
import * as images from './../images.js';
import { useEffect, useState } from 'react';

import "./../styles/navigation.css";

export default function Navigation() {
    const [currentPath, setCurrentPath] = useState('');

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
                    <button><Image src={images.theme}  alt=""/></button>
                    <Link href={""} className='photo_nav photo_nav_tg'></Link>
                    <Link href={""} className='photo_nav photo_nav_ds'></Link>
                    <Link href={""} className='photo_nav photo_nav_vk'></Link>
                </div>
                    <Link href={""} className="profile align-middle mr-5">профиль</Link>
                </li>
            </ul>
        </nav>
    );
}
