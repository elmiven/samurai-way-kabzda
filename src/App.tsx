import React from 'react';
import logo from './logo.svg';
import './App.css';
/* my import */
import Accordion from './components/Accordion';
import { Rating } from './components/Rating';




function App() {
  console.log("App rendering");
  return (
    <div>
      <PageTitle title={"This is title 1"} />
      <PageTitle title={"This is title 2"} />
      Article 1
      <Rating value={5} />
      <Accordion titleValue={"Accordion title1"} collapsed={true} />
      <Accordion titleValue={'Accordion title2'} collapsed={false} />
      Article 2
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
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



function hello() {
  alert('hello IT_KAMASUTRA')
}
hello();



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