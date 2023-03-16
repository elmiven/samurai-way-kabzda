import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UncontrolledRating } from './UncontrolledRating';
import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UncontrolledRating',
  component: UncontrolledRating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //      value: RatingValueType,
  // ratingCallBack: (value: RatingValueType) => void
  // },
} as ComponentMeta<typeof UncontrolledRating>;

const callback = action("rating changed insde component")

//Old syntax
export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>


// export const RatingChanging = () => {
//   const [rating, setRaiting] = useState<RatingValueType>(3)
//   return <Rating value={rating} ratingCallBack={setRaiting} />
// }


//NewSyntax
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;


// export const EmptyStar = Template.bind({ });

// EmptyStar.args = {
  
//   value:0,
//   ratingCallBack: setRaiting 
// };

// export const Rating1 = Template.bind({});
// Rating1.args = {
//    value: 1,
//    ratingCallBack: ()=>{} 
// };

// export const Rating2 = Template.bind({});
// Rating1.args = {
//    value: 2,
//    ratingCallBack: ()=>{} 
// };

// export const Rating3 = Template.bind({});
// Rating1.args = {
//    value: 3,
//    ratingCallBack: ()=>{} 
// };

// export const Rating4 = Template.bind({});
// Rating1.args = {
//    value: 4,
//    ratingCallBack: ()=>{} 
// };

// export const Rating5 = Template.bind({});
// Rating1.args = {
//    value: 5,
//    ratingCallBack: ()=>{} 
// };





// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
