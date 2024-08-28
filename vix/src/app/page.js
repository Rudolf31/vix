import "./main_page.css";
import * as images from "../app/images.js";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="mt-5">
        <nav className="text-2xl font-bold justify-between px-10 pt-10">
          <ul className="flex gap-2 justify-between">
            <li><Link href={""} >Главная</Link></li>
            <li><Link href={""} >Правила</Link></li>
            <li>
              <div className="flex gap-2">
                <Image src={images.tg_icon} />
                <Image src={images.vk_icon} />
                <Image src={images.ds_icon} />
              </div>
            </li>
            <li><Link href={""} className="profile align-middle" >Профиль</Link></li>
          </ul>
        </nav>
      </header>
      <main></main>
      <footer>
        <p>все права защищены</p>
      </footer>
    </>
  );
}
