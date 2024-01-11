import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './index'

export default {
  title: 'atoms/Button',
  component: Button,
} as Meta;

export const Primary: Story = () => <Button primary>Primary Button</Button>;
Primary.args = {
  primary: true,
  type: 'secondary'
}
export const Secondary: Story = () => <Button>Secondary Button</Button>
Secondary.args = {
  primary: false,
  type: 'secondary'
}