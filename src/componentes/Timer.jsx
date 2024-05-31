import React from "react"
import "./Timer.css"

function Timer(){
    return (
        <div className="contenedor">
            <div className="redondoMayor">
                <p>15:00</p>

            </div>
            <div className="redondoMenor">
                <img src="./assets/return.png" alt="" />

            </div>
        </div>

    )
}
export default Timer;