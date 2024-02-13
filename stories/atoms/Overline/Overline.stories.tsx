import React from 'react'
import { Overline } from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/Overline',
  component: Overline,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {return <Overline {...args} />}

export const TemplateOverline = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TemplateOverline.args = {
  zIndex: 100,
  bgColor: 'rgba(0, 0, 0, 0.5)',
  show: true
}
