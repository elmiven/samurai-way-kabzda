import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


export type RatingPropsType = {
  value: RatingValueType
  ratingCallBack: (value: RatingValueType) => void
}


export function Rating(props: RatingPropsType) {
  console.log("Rating render");


  return (
    <div>
      <Star selected={props.value >= 0} onClickCallBack={props.ratingCallBack} value={1}/>
      <Star selected={props.value >= 1} onClickCallBack={props.ratingCallBack} value={2}/>
      <Star selected={props.value >= 2} onClickCallBack={props.ratingCallBack} value={3}/>
      <Star selected={props.value >= 3} onClickCallBack={props.ratingCallBack} value={4}/>
      <Star selected={props.value >= 4} onClickCallBack={props.ratingCallBack} value={5}/>
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







export type StarPropsType = {
  selected: boolean
  onClickCallBack: (value: RatingValueType) => void
  value: RatingValueType
}

function Star(props: StarPropsType) {
  console.log("star render");

 
  return <span onClick={() => { props.onClickCallBack(props.value) }} > 
  {(props.selected) 
  ? <b>Star </b> 
  : "Star "} 
  </span>
    
  // if (props.selected === true) {
  //   return <span><b>Star</b> </span>
  // } else {
  //   return <span>Star </span>
  // } 
}




