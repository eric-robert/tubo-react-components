import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Card } from './component';
import { Debug, PlainButton } from '../..';

export default {

  title: 'Layout/Card',
  component: Card,

}

export const Simple = () => {
  return <Card >
    <Debug width={300} height={200}/>
  </Card>
}


export const WithTile = () => {
  return <Card title='testing'>
    <Debug width={300} height={200}/>
  </Card>
}

export const WithButtons = () => {
    return <Card title='testing'>
      <Debug width={300} height={200}/>
      <PlainButton text='Save' />
      <PlainButton text='Delete' danger />
    </Card>
}
