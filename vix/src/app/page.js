import "./styles/globals.css";
import "./styles/main_page.css";
import * as images from "../app/images.js";
import Image from 'next/image';
import Link from 'next/link';
import Slider from "../app/components/slider.js";
import Store from "../app/components/buy_vix.js";

export default function Home() {
  return (
    <>
      <header className="mt-5">
        <nav className="text-2xl font-bold pt-7">
        <ul className="flex gap-2 justify-content: space-between items-center">
          <li className="flex gap-16 ml-48">
            <Link href={""} className="" >главная</Link>
            <Link href={""} className="" >правила</Link>
          </li>
          <li className="flex gap-5 ml-auto">
            <div className="flex gap-5 mr-11">
              <button><Image src={images.theme} alt=""/></button>
              <Image src={images.tg_icon} />
              <Image src={images.ds_icon} />
              <Image src={images.vk_icon} />
            </div>
            <Link href={""} className="profile align-middle mr-5" >профиль</Link>
          </li>
        </ul>
        </nav>
      </header>
      <main>
        <Slider/>
        <Store/>
      </main>
      <footer>
        <p>все права защищены</p>
      </footer>
    </>
  );
}
