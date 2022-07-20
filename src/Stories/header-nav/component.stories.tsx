import React from 'react';
import { HeaderNav } from './component';
import { StyleProvider } from '../..';

export default {

  title: 'Header/Nav',
  component: HeaderNav,

}

export const Active = () => <StyleProvider>
  <HeaderNav active text='Link to thing' />
</StyleProvider>

export const Inactive = () => <StyleProvider>
  <HeaderNav text='Link to thing' />
</StyleProvider>