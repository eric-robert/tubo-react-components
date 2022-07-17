import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './ButtonFooter';

export default {

  title: 'Buttons/FooterButton',
  component: Button,

} as ComponentMeta<typeof Button>;


// Templates

export const Example = () => <Button text='Link to thing' />;
