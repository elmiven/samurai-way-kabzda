import React, { useState } from 'react';
import { RatingValueType } from './Rating';




type RatingPropsType = {
  defaultValue?: RatingValueType
  onChange: (value: RatingValueType) => void
}


export function UncontrolledRating(props: RatingPropsType) {
  console.log("Rating render");

  const [rating, setRating] = useState(props.defaultValue ? props.defaultValue: 0)

  return (
    <div>
      <Star selected={rating > 0} setValue={() => {setRating(1); props.onChange(1) } } />
      <Star selected={rating > 1} setValue={() => {setRating(2); props.onChange(2) } } />
      <Star selected={rating > 2} setValue={() => {setRating(3); props.onChange(3) } } />
      <Star selected={rating > 3} setValue={() => {setRating(4); props.onChange(4) } } />
      <Star selected={rating > 4} setValue={() => {setRating(5); props.onChange(5) } } />
      
      
      
      
      {/* <Star selected={rating > 4} setValue={ ()=>{setRating(5); props.onChange(5); } } /> */} 

      {/* {/* <Star selected={rating > 4}/><button onClick={()=>{setRating(5)}}>5</button> */}

    </div>
  );
}

type StarPropsType = {
  selected: boolean
  // value: 1 | 2 | 3 | 4 | 5
  // setValue: (value: 1 | 2 | 3 | 4 | 5) => void
  setValue: () => void

}

function Star(props: StarPropsType) {

  const clickNandler = () => {
    alert("hey!")
  }

  

  return <span onClick={ props.setValue  }>
    {props.selected ? <b>Star </b> : "star "}
  </span>

//   if (props.value === 1){
//   return (
//     <div>
//       <Star selected={true}/>
//       <Star selected={false}/>
//       <Star selected={false}/>
//       <Star selected={false}/>
//       <Star selected={false}/>
//     </div>
//   );
// }
// if (props.value === 2){
//   return (
//     <div>
//       <Star selected={true}/>
//       <Star selected={true}/>
//       <Star selected={false}/>
//       <Star selected={false}/>
//       <Star selected={false}/>
//     </div>
//   );
// }  if (props.value === 3){
//   return (
//     <div>
//       <Star selected={true}/>
//       <Star selected={true}/>
//       <Star selected={true}/>
//       <Star selected={false}/>
//       <Star selected={false}/>
//     </div>
//   );
// }  if (props.value === 4){
//   return (
//     <div>
//       <Star selected={true}/>
//       <Star selected={true}/>
//       <Star selected={true}/>
//       <Star selected={true}/>
//       <Star selected={false}/>
//     </div>
//   );
// }  if (props.value === 5){
//   return (
//     <div>
//       <Star selected={true}/>
//       <Star selected={true}/>
//       <Star selected={true}/>
//       <Star selected={true}/>
//       <Star selected={true}/>
//     </div>
//   );
// }  
//   return (
//     <div>
//       <Star selected={false}/>
//       <Star selected={false}/>
//       <Star selected={false}/>
//       <Star selected={false}/>
//       <Star selected={false}/>
//     </div>
//   );
// }









  // return (props.selected) 
  // ? <span onClick={clickNandler} ><i>Star </i></span> 
  // :  <span onClick={clickNandler} >Star </span> 




  // console.log("star render");
  // if (props.selected === true) {
  //   return <span><b>Star</b> </span>
  // } else {
  //   return <span>Star </span>
  // } 
}




