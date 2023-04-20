import { useState } from "react";
import "./menu.css";
import Kata1 from "../kata/kata1/kata1";
import Kata2 from "../kata/kata2/kata2";

const Menu = () => {
  const [kataSelect, setKataSelect] = useState("");
  return (
    <div className="globalContainer">
      <div className="menuContainer">
        <button onClick={() => setKataSelect("kata1")}>Kata 1</button>
        <button onClick={() => setKataSelect("kata2")}>Kata 2</button>
      </div>
      {kataSelect === "kata1" && <Kata1 />}
      {kataSelect === "kata2" && <Kata2 />}
    </div>
  );
};

export default Menu;
