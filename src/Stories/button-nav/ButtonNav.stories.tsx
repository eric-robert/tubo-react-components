import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './ButtonNav';

export default {

  title: 'Buttons/NavButton',
  component: Button,

} as ComponentMeta<typeof Button>;


// Templates

export const Active = () => 
  <Button text="Active" active />;

export const NotActive = () => 
  <Button text="Not Active" />;
