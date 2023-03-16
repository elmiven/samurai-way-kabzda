import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import Accordion, { AccordionPropsType } from './Accordion';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Accordion',
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
       color: {
        control: 'color'
       }  //as ComponentMeta<typeof Accordion>;
      }
}


const callback = action("accordion mode change event ")
const onClickCallback = action("accordion mode change event fired ")


const Template: ComponentStory<any> = (args) => <Accordion {...args}/>

const callbackProps = {
  // onClickCallBack: callback
  onChange: callback,
  onClick: onClickCallback
}

export const MenuCollapsed2 = Template.bind({})
MenuCollapsed2.args = {
  ...callbackProps,
  titleValue: "Menu",
  collapsed: true, 
  items: []
}

export const UserUncollapsedMode = Template.bind({})
UserUncollapsedMode.args = {
  ...callbackProps,
  titleValue: "Users",
  collapsed: false, 
  items: [{title: "Dimych", value: 1}, {title: "Valera",value: 2},  {title: "Artem", value: 3}, {title: "Viktor", value: 4}]
}

export const ModeChanging: ComponentStory<any> = (args) => {
  const [value, setValue] = useState<boolean>(true)

return <Accordion {...args} collapsed={value} onChange={()=>{setValue(!value)}}/> 
}
 ModeChanging.args = {
  titleValue: "Users",
  items: [{title: "Dimych", value: 1}, {title: "Valera",value: 2},  {title: "Artem", value: 3}, {title: "Viktor", value: 4}],
  onClick: action("some item was clicked")
  }





//Old syntax
// export const MenuCollapsedMode = () => <Accordion titleValue={"menu"} collapsed={true} onClickCallBack={callback} />
// export const UsersCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onClickCallBack={callback} />

// export const ModeChangnig = () => {
//     const [value, setValue] = useState<boolean>(true)
//     return <Accordion titleValue={"Users"} collapsed={value} onClickCallBack={setValue} />  
// }


//NewSyntax
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;


// export const EmptyStar = Template.bind({ });

// EmptyStar.args = {
  
//   value:0,
//   ratingCallBack: setRaiting 
// };
