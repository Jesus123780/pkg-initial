import React from 'react'
import { ProgressBar } from './index'
import { Meta } from '@storybook/react'

export default {
  title: 'atoms/ProgressBar',
  component: ProgressBar
} as Meta

const Template = (args) => {return <ProgressBar {...args} />}

export const Default = Template.bind({})
Default.args = {}

export const WithProgress = Template.bind({})

WithProgress.args = {
  progress: 50
}

export const WithFinalColor = Template.bind({})
WithFinalColor.args = {
  progress: 80,
  final: 80
}
