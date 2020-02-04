import React, { useState } from "react"
export function TextDisplay(props){
    const [fontSize,setFontSize]=useState(10);


    function increaseFontSize(){
        setFontSize(fontSize+10);
    }
    function decreaseFontSize(){
        setFontSize(fontSize-10);
    }
    return (
        <div style= {{fontSize: fontSize}}>
            {props.text}
            <button onClick= {increaseFontSize}>increasefontsize</button>
            <button onClick= {decreaseFontSize}>MAKESMALLLLL</button>
        </div>
        
    )
}

