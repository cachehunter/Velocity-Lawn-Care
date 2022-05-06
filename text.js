import React from "react"
import Landscape from "./Images/landscape.jpg"
import Mow from "./Images/IMG_1020.JPG"
import Leaf from "./Images/leaf.jpg"
import Edge from "./Images/IMG_1025.JPG"
import Weed from "./Images/IMG_1022.JPG"

export default function Text(){
    return(
        <div className="text">
            
              
               <p className="description"> 
               We offer lawn mowing and yard maintance services to Quincy, Hannibal and the surrounding area. 
               We are an insured profesional lawn care company. Services we offer include.
               <div className="grid-container">
                 
                 <div className="service"><h1>Lawn mowing</h1>No yard is to big or to small! 
                 <img src={Mow} alt="mower" className="services-image" /></div>
                 
                 <div className="service"><h1>Bush trimming </h1>We also offer bush trimming services
                  at an additional fee <img src={Landscape} alt="mower" className="services-image"/> </div>
                  
                 <div className="service"><h1>Weed Eating </h1>Included with mowing on most yards. 
                 <img src={Weed} alt="mower" className="services-image"  /> </div>

                 <div className="service"><h1>Sidewalk Edging</h1> Call Isaiah to discuss options.
                 <img src={Edge} alt="mower" className="services-image"  /> </div>

                 <div className="service"><h1>Yard cleanup</h1>Call for quotes 
                 <img src={Leaf} alt="mower" className="services-image"  /> </div>    

               </div>
               For questions or prices please contact at </p>
         </div>
    )
}