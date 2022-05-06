import React from "react"
import Vel from "./Images/vel14.png"

export default function Navbar(){
    return(
        <header className="navbar">
            
            <div>
                <img src={Vel} alt="logo" className="logo" />
            </div>
        </header>
    )
}