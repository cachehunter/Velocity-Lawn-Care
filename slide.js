import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image1 from '../src/Images/IMG_0925.JPG';
import Image2 from "../src/Images/IMG_4611.JPG";
import Image3 from "../src/Images/IMG_0925.JPG";

export default function Slider() {
    const images = [Image3, Image2, Image1];
    return (
        <div>
           <Slide>
             {images.map((img) => {
               return (
                 <div >
                  <img className="slide-img" src={img} alt="Lawns"/>
                 </div>
                 )
               })}
           </Slide>
        </div>
  );
}