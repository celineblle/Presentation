import PageTest1 from '../assets/Page_test_1.jpg';
import './presentationProjets.css';
import PageTest2 from '../assets/Page_test_2.jpg';
import PageTest3 from '../assets/Page_test_3.jpg';
import { useState } from 'react';

function PresentationProjets() {
const [index, setIndex] = useState(0)

const images = [
      PageTest1, PageTest2, PageTest3
    ]

function handleClickNext() {
  if (index < 2) {
    setIndex(index + 1);
    console.log(index)
  }
}
function handleClickPrev() {
  if (index > 0){
    setIndex(index-1)
    console.log(index)
  }
}
  
  return (
    <div className='slide-container'>
      <button className='prev' onClick={handleClickPrev} >Prev</button>
      <div className="slide">
        <img src={images[index]} alt="" />
      </div>
    
    <button className='next' onClick={handleClickNext} >Next</button>
    </div>
  );
}

export default PresentationProjets;
