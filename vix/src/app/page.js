import "./styles/globals.css";
import "./styles/main_page.css";
import * as images from "../app/images.js";
import Image from 'next/image';
import Navigation from "../app/components/navigation.js";
import Slider from "../app/components/slider.js";
import Store from "../app/components/buy_vix.js";
import PopUpBuy from "./components/pop_up_buy.js";


export default function Home() {

  return (
    <>
      <header className="mt-5">
        <Navigation/>
      </header>
      <main>
        <Slider/>
        <Store/>
      </main>
      <footer>
        <div className="relative"><Image src={images.narrow_band} alt="" className="narrowo_band" style={{ width: '100%', height: 'auto' }}/></div>
        <p className="">все права защищены</p>
      </footer>
      <PopUpBuy/>
    </>
  );
}
