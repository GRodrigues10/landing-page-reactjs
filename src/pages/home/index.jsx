import React from "react"
import { Elipse } from "../../components/Elipse/Index"

export function Home(){
    return(
        <>
        
            <header className = 'container'>
                <div className="elipse-container">

                    <div className="elipse-left">
                        <Elipse/>
                    </div>

                    <div className="elipse-right"></div>

                </div>
            </header>
            
        </>
        )
}