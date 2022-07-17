import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './ComponentHeader';
import { NavButton } from '../..';

export default {

  title: 'Components/Header',
  component: Header,

} as ComponentMeta<typeof Header>;


// Templates

export const Simple = () => {
  
  const [selected, setSelected] = useState('Option1');

  return <Header active={selected} text="Title" onClick={setSelected}>

    <NavButton text="Option1" active />
    <NavButton text="Option2" active />
    <div>
      test
    </div>

  </Header>

}