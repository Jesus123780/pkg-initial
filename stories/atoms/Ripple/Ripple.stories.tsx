import React from 'react'
import {  RippleButton  } from './index'
import { Meta } from '@storybook/react'

export default {
  title: 'atoms/RippleButton',
  component: RippleButton
} as Meta

const Template = (args) =>  <RippleButton {...args} ></RippleButton>

export const Example = Template.bind({})
Example.args = {
  label: 'Click Me',
  onClick: () => {
    alert('Button clicked!')
  }
}
