import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import Accordion from './Accordion';
import UncontrolledAccordion from './UncontrolledAccordion';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UncontrolledAccordion',
  component: UncontrolledAccordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //      value: RatingValueType,
  // ratingCallBack: (value: RatingValueType) => void
  // },
} as ComponentMeta<typeof UncontrolledAccordion>;

const callback = action("accordion mode change event ")

//Old syntax
export const ModeChanging = () => {
    return (

<UncontrolledAccordion titleValue={"menu uncontrolled accordion"} />
    )
}

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
