import PageTest1 from "../assets/IMG_0995.jpg";
import "./presentationProjets.css";
import PageTest2 from "../assets/IMG_1692.jpg";
import PageTest3 from "../assets/IMG_1694.jpg";
import { useState } from "react";
import arrowNext from "../assets/arrow_next.svg";
import arrowBack from "../assets/arrow_back.svg";

function PresentationProjets() {
  const [index, setIndex] = useState(0);

  const images = [PageTest1, PageTest2, PageTest3];

  function handleClickNext() {
    if (index < 2) {
      setIndex(index + 1);
    }
  }
  function handleClickPrev() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div className="slide-container">
      <img className="prev" src={arrowBack} onClick={handleClickPrev} />
      <img className="slides" src={images[index]} alt="" />

      <img className="next" src={arrowNext} onClick={handleClickNext} />
    </div>
  );
}

export default PresentationProjets;
