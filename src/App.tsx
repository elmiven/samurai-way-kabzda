import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
/* my import */
import { Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import Accordion from './components/Accordion/Accordion';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/Rating/UncontrolledRating';
import UncontrolledOnOff from './components/OnOff/UncontrolledOnOff';



function App() {
  console.log("App rendering");

 
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

  const [toggle, setToggle] = useState(false);

  return (

    <div className={"App"}>
      <PageTitle title={"Uncontrolled"}/>
     
      <div></div>

      
      
      <UncontrolledOnOff onChange={setToggle}/> 
      <UncontrolledRating onChange={setRatingValue}/>
      <UncontrolledAccordion titleValue={"UncontrolledAccordion"} />

      <h2>Controlled</h2>
      
      <OnOff setToggle={(toggle)=>{setToggle(toggle)}} toggle={toggle}/>
      <Rating value={ratingValue} ratingCallBack={setRatingValue}/>
      <Accordion 
        titleValue={"Accordion title1"} 
        collapsed={accordionCollapsed} 
        // onClickCallBack={setAccordionCollapsed}
        onChange={() => setAccordionCollapsed(!accordionCollapsed)}
      />

      {/* <h2>Article 1</h2>
      <Rating value={5} />
      <Accordion titleValue={"Accordion title1"} collapsed={true} />
      <Accordion titleValue={'Accordion title2'} collapsed={false} />
      <div></div>

      <h2>Article 2</h2>
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}






    </div>
  );
}


type PageTitlePropsType = {
  title: string;
}

function PageTitle(props: PageTitlePropsType) {
  console.log("title render");
  return (<h1>{props.title}</h1>
  )

}



// function hello() {
//   alert('hello IT_KAMASUTRA')
// }
// hello();



export default App;












/* Original create-app-react-TS function

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/