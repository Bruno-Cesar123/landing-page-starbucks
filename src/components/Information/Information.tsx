import React, { useState } from 'react';
import Image1 from '../../assets/images/img1.png';
import Image2 from '../../assets/images/img2.png';
import Image3 from '../../assets/images/img3.png';
import Thumb1 from '../../assets/images/thumb1.png';
import Thumb2 from '../../assets/images/thumb2.png';
import Thumb3 from '../../assets/images/thumb3.png';
import './styles.css';

const Information: React.FC = () => {

  const images = {
    ImageOne: Image1,
    ImageTwo: Image2,
    ImageThree: Image3
  }

  const colors = {
    ColorOne: '#017143',
    ColorTwo: '#eb7495',
    ColorThree: '#d752b1'
  }



  const [image, setImage] = useState(images.ImageOne);
  const [color, setColor] = useState(colors.ColorOne);
  

  return (
    <>
      <div className="circle" style={{'background': color }}></div>
        <div className="content">
          <div className="textBox">
            <h2>It's not just Coffee<br />It's<span>Starbucks</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime inventore, praesentium vero fuga corrupti est impedit, consectetur nostrum sunt nihil placeat labore voluptas, molestias rerum fugiat itaque? Neque, doloremque!</p>
            <a href="!#">Learn More</a>
          </div>
          <div className="imgBox">
              <img src={image} alt="imagem"/>
          </div>
        </div>
        <ul className="thumb">
        <li><img src={Thumb1} alt="thumb1" onClick={() => {setImage(images.ImageOne); setColor(colors.ColorOne)}}/></li>
        <li><img src={Thumb2} alt="thumb2" onClick={() => {setImage(images.ImageTwo); setColor(colors.ColorTwo)}}/></li>
        <li><img src={Thumb3} alt="thumb3" onClick={() => {setImage(images.ImageThree); setColor(colors.ColorThree)}}/></li>
      </ul>
  </>
    
  )
}

export default Information;