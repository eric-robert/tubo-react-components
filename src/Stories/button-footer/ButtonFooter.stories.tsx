import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterButton } from './ButtonFooter';

export default {

  title: 'Buttons/FooterButton',
  component: FooterButton,

} as ComponentMeta<typeof FooterButton>;


// Templates

export const Example = () => <FooterButton text='Link to thing' />;
