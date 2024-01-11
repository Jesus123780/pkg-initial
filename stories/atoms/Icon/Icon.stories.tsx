import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon } from './index'; // Asegúrate de tener la ruta correcta

export default {
  title: 'atoms/Icon',
  component: Icon,
} as Meta;

const Template: Story<{ icon: string, size: number }> = (args) => <Icon {...args} />;

export const IconoMiniCheck = Template.bind({});
IconoMiniCheck.args = {
  icon: 'MiniCheck', // Aquí puedes cambiar la clave para mostrar distintos íconos
};

export const IconoLogoCMF = Template.bind({});
IconoLogoCMF.args = {
  icon: 'LogoCMF', // Clave para mostrar otro ícono
  size: 100, // Cambia el tamaño
};
