import React from 'react';
import { Footer } from './component';
import { FooterButton, FooterSection, StyleProvider } from '../..';

export default {

  title: 'Footer/Footer',
  component: Footer,

}

export const Example = () => <StyleProvider>
  <Footer>
    <FooterSection text='Social Links'>
      <FooterButton text='Github' />
      <FooterButton text='Instagram' />
      <FooterButton text='Facebook' />
    </FooterSection>
    <FooterSection text='Social Links'>
      <FooterButton text='Github' />
      <FooterButton text='Instagram' />
      <FooterButton text='Facebook' />
    </FooterSection>
    <FooterSection text='Social Links'>
      <FooterButton text='Github' />
      <FooterButton text='Instagram' />
      <FooterButton text='Facebook' />
    </FooterSection>
  </Footer>
</StyleProvider>