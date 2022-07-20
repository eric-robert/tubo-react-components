import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Debug } from './component';

export default {

  title: 'Debug/Debug Indicator',
  component: Debug,

} as ComponentMeta<typeof Debug>;


// Templates

export const Example = () => {
  return <Debug width={50} height={50} />
}
