import { useState } from "react";

type PropsType = {
   

}


function UncontrolledOnOff(props: PropsType) {

console.log("OnOff rendering");
const [toggle, setToggle] = useState(false);

console.log("toggle:" + toggle);

    const OnStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        backgroundColor: toggle ? "green" : "white",
        

    }
    const OffStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: toggle ? "white" : "red",
        
    }
    const IndicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: toggle ? "green" : "red", 
    }
    return (
        <div>
            <div style={OnStyle} onClick={ ()=>{setToggle(true)} }>On</div>
            <div style={OffStyle} onClick={ ()=>{setToggle(false) }} >Off</div>
            <div style={IndicatorStyle} ></div>

        </div>
    )
}

export default UncontrolledOnOff