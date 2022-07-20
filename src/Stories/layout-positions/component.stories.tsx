import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Position } from './component';
import { Debug } from '../..';

export default {

  title: 'Layout/Positions',
  component: Position,

}

export const Center = () => {
    return <Position mode='center'>
      <Debug width={300} height={200}/>
    </Position>
}
