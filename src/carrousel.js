import "./carrousel.css";
import { useState } from "react";

export default function App() {
  const [toDisp, setDisp] = useState(0);

  return (
    <div className="Carrousel">
      <img
        className={"Obj-contain" + (toDisp === 0 ? "" : " Hiden")}
        alt="lol"
        src="https://github.com/yannkozon/hackathon-eco-conception/blob/main/assets/images/slide-1.jpg?raw=true"
      />
      <img
        className={"Obj-contain" + (toDisp === 1 ? "" : " Hiden")}
        alt="lol"
        src="https://github.com/yannkozon/hackathon-eco-conception/blob/main/assets/images/slide-2.jpg?raw=true"
      />
      <img
        className={"Obj-contain" + (toDisp === 2 ? "" : " Hiden")}
        alt="lol"
        src="https://github.com/yannkozon/hackathon-eco-conception/blob/main/assets/images/slide-3.jpg?raw=true"
      />
      <div className="Nav-Carrousel">
        <div onClick={() => setDisp((toDisp - 1) % 3)}>"ok"</div>
        <div onClick={() => setDisp((toDisp + 1) % 3)}>"ok"</div>
      </div>
    </div>
  );
}
