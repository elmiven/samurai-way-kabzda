

type AccordionPropsType = {
  titleValue: string
}
type AccordionCollapsedPropsType = {
  collapsed: boolean
}

function Accordion(props: any) {
  console.log("Accordion render");
  if (props.collapsed === true) {
    return (

      <>
        <AccordionTitle title={props.titleValue} />
        <AccordionBody />
      </>

    );
  } else {
    return (
      <>empty</>

    )

  }



}










type AccordionTitlePropsType = {
  title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("Accordion render");
  return (<h3>{props.title}</h3>)
}

function AccordionBody() {
  console.log("Accordion render");
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  )
}

export default Accordion;