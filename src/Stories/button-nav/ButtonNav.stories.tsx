import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavButton } from './ButtonNav';

export default {

  title: 'Buttons/NavButton',
  component: NavButton,

} as ComponentMeta<typeof NavButton>;


// Templates

export const Active = () => 
  <NavButton text="Active" active />;

export const NotActive = () => 
  <NavButton text="Not Active" />;
