import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Row, RowProps } from './index'; // Ajusta la ruta

export default {
  title: 'atoms/Row',
  component: Row,
  argTypes: {
    alignItems: {
      control: { type: 'select', options: ['flex-start', 'flex-end', 'center', 'stretch'] },
    },
    justifyContent: {
      control: { type: 'select', options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'] },
    },
  }
} as Meta;

const Template: Story<RowProps> = (args) => <Row {...args} />;

export const Default = Template.bind({});
Default.args = {
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
};
