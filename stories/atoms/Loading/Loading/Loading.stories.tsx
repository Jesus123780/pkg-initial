import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Loading } from './index';

const meta: Meta = {
  title: 'atoms/Loading',
  component: Loading,
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
    args: {},
  };