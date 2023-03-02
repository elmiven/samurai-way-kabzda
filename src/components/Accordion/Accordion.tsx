

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onClickCallBack: (a: boolean) => void
}

type AccordionCollapsedPropsType = {
  collapsed: boolean
}



function Accordion(props: AccordionPropsType) {
  console.log("Accordion render");


  return (
    <>
      <AccordionTitle title={props.titleValue} onClickCallBack={()=>{props.onClickCallBack(!props.collapsed)}} />
      {!props.collapsed && <AccordionBody />}
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
  onClickCallBack: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
 
  let callBackHandler = () => {
    props.onClickCallBack()
  }

  console.log("Accordion render");
  return (<h3 onClick={callBackHandler}>{props.title}</h3>)
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

export default Accordion;