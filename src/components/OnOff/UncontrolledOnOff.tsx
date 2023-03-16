import { useState } from "react";

type PropsType = {
   onChange: (on: boolean) => void
    defaultOn?: boolean
}


function UncontrolledOnOff(props: PropsType) {
// console.log("Uncontrolled OnOff rendering");

const [toggle, setToggle] = useState(props.defaultOn ? props.defaultOn : false);

// console.log("toggle:" + toggle);

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



   
    const onClicked = () => {
        setToggle(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setToggle(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={OnStyle} onClick={onClicked }>On</div>
            <div style={OffStyle} onClick={offClicked} >Off</div>
            <div style={IndicatorStyle} ></div>

        </div>
    )
}

export default UncontrolledOnOff