import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer, FooterCategory } from './ComponentFooter';
import { NavButton, FooterButton } from '../..';

export default {

  title: 'Components/Footer',
  component: Footer,

} as ComponentMeta<typeof Footer>;


// Templates

export const Simple = () => {
  
  const [selected, setSelected] = useState('Option1');

  return <Footer>
    <FooterCategory title="Title">
      <FooterButton text="Option1" />
      <FooterButton text="Option2" />
    </FooterCategory>
    <FooterCategory title="Title">
      <FooterButton text="Option1" />
      <FooterButton text="Option2" />
    </FooterCategory>
  </Footer>

}