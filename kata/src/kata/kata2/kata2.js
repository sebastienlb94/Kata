import "./kata2.css";
import Slider from "./Slider/slider";

const Kata2 = () => {
  return (
    <div className="containerKata1">
      <div className="rulesKata">
        <div className="topRulesKata">
          <div className="title">Slider</div>
          <div className="level">* * </div>
        </div>
        <div className="textRulesKata">
          Faire un slider identique à ceux des sites d'e-commerce.
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Kata2;
