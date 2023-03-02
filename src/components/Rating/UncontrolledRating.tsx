import React, { useState } from 'react';


type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}


export function UncontrolledRating() {
  console.log("Rating render");

  const [rating, setRating] = useState(0)

  return (
    <div>
      <Star selected={rating > 0} setValue={setRating} value={1}/>
      <Star selected={rating > 1} setValue={setRating} value={2}/>
      <Star selected={rating > 2} setValue={setRating} value={3}/>
      <Star selected={rating > 3} setValue={setRating} value={4}/>
      <Star selected={rating > 4} setValue={setRating} value={5}/>
      {/* <Star selected={rating > 4}/><button onClick={()=>{setRating(5)}}>5</button> */}

    </div>
  );
}



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







type StarPropsType = {
  selected: boolean
  value: 1 | 2 | 3 | 4 | 5
  setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarPropsType) {

  const clickNandler = () => {
    alert("hey!")
  }

  return <span onClick={ ()=> {props.setValue(props.value)}   }>
    {props.selected ? <b>Star </b> : "star "}
  </span>

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




