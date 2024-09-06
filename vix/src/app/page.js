import "./styles/globals.css";
import "./styles/main_page.css";
import Slider from "../app/components/slider.js";
import Store from "../app/components/buy_vix.js";
import PopUpBuy from "./components/pop_up_buy.js";



export default function Home() {

  return (
    <>
      <main>
        <Slider/>
        <Store/>
      </main>
      <PopUpBuy/>
    </>
  );
}
