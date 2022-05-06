import React from "react"
import Slider from "./slide"
import Backgound from "./Images/house.jpg"

export default function BackGround(){
    return(
    <div>
        <img src={Backgound} alt="grass" className="background" />
                  <div className="slide--container"> 
           <Slider />
       </div>
    </div>
    )
}

