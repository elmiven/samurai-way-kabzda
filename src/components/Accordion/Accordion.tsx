

type ItemType = {
  title: string
  value: any
}


export type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  // onClickCallBack: (a: boolean) => void
  onChange: () => void
  color?: string
  items: ItemType[]
  onClick: (value: any) => void
}




function Accordion(props: AccordionPropsType) {
  console.log("Accordion render");
  return (
    <>
      <AccordionTitle
        title={props.titleValue}
        color={props.color}
      // onClickCallBack={() => { props.onClickCallBack(!props.collapsed) }}
        onChange={props.onChange}
/>

      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </>
  )
  }




  type AccordionTitlePropsType = {
    title: string
    color?: string
    // onClickCallBack: () => void
    onChange: () => void

  }

  function AccordionTitle(props: AccordionTitlePropsType) {

    // let callBackHandler = (e: any) => {
    //   props.onClickCallBack()
    // }

    console.log("Accordion rendering");
    return (
      <h3
        style={{ color: props.color ? props.color : 'black' }}
        // onClick={callBackHandler}>{props.title}
        onClick={(e) => props.onChange()}> --- {props.title} ---
      </h3>)
  }



  export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void 
  }


  function AccordionBody(props: AccordionBodyPropsType) {
    console.log("Accordion render");
    return (
      <>
        <ul>
          {props.items.map((i, index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}



          {/* <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li> */}
        </ul>
      </>
    )
  }

  export default Accordion;







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



// }










