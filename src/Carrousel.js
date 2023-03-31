import "./carrousel.css";
import { useState } from "react";
import slide1 from './assets/images/slide-1.webp'
import slide2 from './assets/images/slide-2.webp'
import slide3 from './assets/images/slide-3.webp'
import slide4 from './assets/images/slide-4.webp'
export default function Carrousel() {
  const [toDisp, setDisp] = useState(0);

  return (
    <div className="Carrousel">
      <img
        className={"Obj-contain" + (toDisp === 0 ? "" : " Hiden")}
        alt="lol"
        src={slide1}
      />
      <img
        className={"Obj-contain" + (toDisp === 1 ? "" : " Hiden")}
        alt="lol"
        src={slide2}
      />
      <img
        className={"Obj-contain" + (toDisp === 2 ? "" : " Hiden")}
        alt="lol"
        src={slide3}
      />
      <img
        className={"Obj-contain" + (toDisp === 3 ? "" : " Hiden")}
        alt="lol"
        src={slide4}
      />
      <div className="Nav-Carrousel">
        <div onClick={() => setDisp((toDisp - 1) % 4)}>
          "OKOK"
        </div>
        <div onClick={() => setDisp((toDisp + 1) % 4)}>
          "OKOK"
        </div>
      </div>
    </div>
  );
}