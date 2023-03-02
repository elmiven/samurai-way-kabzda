import { useState } from "react"


type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
}

type AccordionCollapsedPropsType = {
  collapsed: boolean
}



function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("Accordion render");

  let [collapsed, setCollapsed] = useState(false);



  return (
    <>
      <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}} />
      {/* <button onClick={() => { setCollapsed(!collapsed) }}>COLLAPSE</button> */}
      {!collapsed && <AccordionBody />}
    </>
  )


  // if (props.collapsed === true) {
  //   return (
  //     <>
  //       <AccordionTitle title={props.titleValue} />

  //     </>
  //   );
  // } else {
  //   return (
  //     <><AccordionTitle title={props.titleValue} />
  //     <AccordionBody /></>
  // )
  // }



}










type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("Accordion render");
  return (
    <h3 onClick={ ()=>  {props.onClick()} }  >{props.title}</h3>
    
    )
}

function AccordionBody() {
  console.log("Accordion render");
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </>
  )
}

export default UncontrolledAccordion;