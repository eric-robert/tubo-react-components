import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from './LayoutContainer';
import { PlainButton } from '../..';

export default {

  title: 'Layout/Container',
  component: Container,

} as ComponentMeta<typeof Container>;


// Templates

export const Simple = () => {
    return <Container text='Ownership'>
    <div> testing  testingtesting  testingtesting  testingtesting  testingtesting  testingtesting  testing </div>
    <div> testing  testingtesting  testingtesting  testingtesting  testingtesting  testingtesting  testing </div>
    <div> testing  testingtesting  testingtesting  testingtesting  testingtesting  testingtesting  testing </div>
    <div> testing  testingtesting  testingtesting  testingtesting  testingtesting  testingtesting  testing </div>
    <div> testing  testingtesting  testingtesting  testingtesting  testingtesting  testingtesting  testing </div>
    <div> testing  testingtesting  testingtesting  testingtesting  testingtesting  testingtesting  testing </div>
    </Container>
}

export const WithButtons = () => {
    return <Container text='Ownership'>

      <div> testing  testingtesting  testingtesting  testingtesting  testingtesting  testingtesting  testing </div>
      <div> testing  testingtesting  testingtesting  testingtesting  testingtesting  testingtesting  testing </div>
      <div> testing  testingtesting  testingtesting  testingtesting  testingtesting  testingtesting  testing </div>
      <div> testing  testingtesting  testingtesting  testingtesting  testingtesting  testingtesting  testing </div>
      <div> testing  testingtesting  testingtesting  testingtesting  testingtesting  testingtesting  testing </div>
      <div> testing  testingtesting  testingtesting  testingtesting  testingtesting  testingtesting  testing </div>

      <PlainButton text='Button 2' />
      <PlainButton text='Button 1' primary />
    
    </Container>
}