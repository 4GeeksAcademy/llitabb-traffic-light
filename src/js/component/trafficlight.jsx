import React, { useState } from "react";

const TrafficLight = () => {
    const [redLight, setRedLight] = useState("off")
    const [amberLight, setAmberLight] = useState("off")
    const [greenLight, setGreenLight] = useState("off")

    function switchRed() {
        if(redLight == "off"){
            setRedLight("lit")
            setAmberLight("off")
            setGreenLight("off")
        } else {
            setRedLight("off")
        }
    }
    function switchAmber() {
        if(amberLight == "off"){
            setAmberLight("lit")
            setRedLight("off")
            setGreenLight("off")
        } else {
            setAmberLight("off")
        }
    }
    function switchGreen() {
        if(greenLight == "off"){
            setGreenLight("lit")
            setRedLight("off")
            setAmberLight("off")
        } else {
            setGreenLight("off")
        }
    }

    return(
        <div className="d-flex justify-content-center">
            <div className="top"></div>
            <div className="card d-flex flex-column align-items-center">
                    <button onClick={switchRed} className={`mb-3 red ${redLight == "off" ? "off" : "lit"}`}></button>
                    <button onClick={switchAmber} className={`mb-3 amber ${amberLight == "off" ? "off" : "lit"}`}></button>
                    <button onClick={switchGreen} className={`mb-3 green ${greenLight == "off" ? "off" : "lit"}`}></button>
            </div>
        </div>
    )
}


export default TrafficLight