import "./main_page.css";
import * as images from "../app/images.js";

export default function Home() {
  return (
    <>
      <header className="mt-5">
        <nav className="text-2xl font-bold justify-between px-10 pt-10">
          <ul className="flex gap-2 justify-between">
            <li>Главная</li>
            <li>Правила</li>
            <li>
              <div className="flex gap-2">
                <img src={images.tg_icon} />
                <img src={images.vk_icon} />
                <img src={images.ds_icon} />
              </div>
            </li>
            <li>Профиль</li>
          </ul>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
