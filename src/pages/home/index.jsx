import React from "react"
import { Elipse } from "../../components/Elipse/Index"

export function Home(){
    return(
        <>
        
            <header className = 'container'>
                <div className="elipse-container">

                    <div className="elipse-left">
                        <Elipse size={120} opacity={0.2} style={circle-left-one}/>
                        <Elipse size={180} opacity={0.4} style={circle-left-two}/>
                    </div>

                    <div className="elipse-right"></div>

                </div>
            </header>
            
        </>
        )
}
