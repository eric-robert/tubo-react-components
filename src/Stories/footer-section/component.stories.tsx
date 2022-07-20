import React from 'react';
import { StyleProvider, FooterButton } from '../..';
import { FooterSection } from './component';

export default {

  title: 'Footer/Section',
  component: FooterSection,

}

export const Example = () => <StyleProvider>
  <FooterSection text='Social Links'>
    <FooterButton text='Github' />
    <FooterButton text='Instagram' />
    <FooterButton text='Facebook' />
  </FooterSection>
</StyleProvider>