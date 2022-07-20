import React from 'react';
import { StyleProvider } from '../..';
import { FooterButton } from './component';

export default {

  title: 'Footer/Button',
  component: FooterButton,

}

export const Example = () => <StyleProvider>
  <FooterButton text='Link to thing' />
</StyleProvider>