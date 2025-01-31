export function  Elipse({size, opacity, style}){

    const circleStyle = {
            width:`${size}px`,
            height:`${size}px`,
            opacity:opacity,
    }


    return(
    <>
    
        <div className={`circle ${style}`}></div>
        
    
    </>)
}
