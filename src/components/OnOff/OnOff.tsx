import { useState } from "react";

type PropsType = {
    toggle: boolean
    setToggle: (toggle: boolean) => void
}


function OnOff(props: PropsType) {

console.log("OnOff rendering");


// console.log("toggle:" + toggle);

    const OnStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        backgroundColor: props.toggle ? "green" : "white",
        

    }
    const OffStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: props.toggle ? "white" : "red",
        
    }
    const IndicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: props.toggle ? "green" : "red", 
    }
    return (
        <div>
            <div style={OnStyle} onClick={ ()=>{props.setToggle(true)} }>On</div>
            <div style={OffStyle} onClick={ ()=>{props.setToggle(false) }} >Off</div>
            <div style={IndicatorStyle} ></div>

        </div>
    )
}

export default OnOff