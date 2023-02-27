import React, { useState } from 'react';


type RatingPropsType = {
value: 0 | 1 | 2 | 3 | 4 | 5
}


export function UncontrolledRating() {
  console.log("Rating render");

  const [rating, setRating] = useState(0)

  return (
    <div>
      <Star selected={rating > 0}/><button onClick={()=>{setRating(1)}}>1</button>
      <Star selected={rating > 1}/><button onClick={()=>{setRating(2)}}>2</button>
      <Star selected={rating > 2}/><button onClick={()=>{setRating(3)}}>3</button>
      <Star selected={rating > 3}/><button onClick={()=>{setRating(4)}}>4</button>
      <Star selected={rating > 4}/><button onClick={()=>{setRating(5)}}>5</button>

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
}

function Star(props: StarPropsType) {
  console.log("star render");
  if (props.selected === true) {
    return <span><b>Star</b> </span>
  } else {
    return <span>Star </span>
  } 
}




