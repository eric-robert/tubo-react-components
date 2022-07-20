import React from 'react';
import { Header } from './component';
import { StyleProvider, HeaderNav} from '../..';

export default {

  title: 'Header/Header',
  component: Header,

}

export const Example = () => <StyleProvider>
  <Header title='Header Title'>
    <HeaderNav text='Option A' />
    <HeaderNav text='Option B' />
    <HeaderNav text='Option C' />
  </Header>
</StyleProvider>