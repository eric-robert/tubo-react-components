import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Collect } from './component';
import { Debug, StyleProvider } from '../..';

export default {

  title: 'Layout/Collect',
  component: Collect,

}

export const Row = () => {
  return <StyleProvider>
    <Collect mode='row'>
      <Debug width={300} height={200}/>
      <Debug width={300} height={200}/>
      <Debug width={300} height={200}/>
      <Debug width={300} height={200}/>
    </Collect>
  </StyleProvider>
}

export const Column = () => {
  return <StyleProvider>
    <Collect mode='column'>
      <Debug width={300} height={200}/>
      <Debug width={300} height={200}/>
      <Debug width={300} height={200}/>
      <Debug width={300} height={200}/>
    </Collect>
  </StyleProvider>
}
