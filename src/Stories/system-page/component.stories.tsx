import React from 'react';
import { WithButtons } from '../layout-card/component.stories';
import { Collect } from '../layout-collect/component';
import { StyleProvider } from '../system-style-provider/component';
import { Page } from './component';

export default {

  title: 'System/Page',
  component: Page,
  
}

export const none = () => <StyleProvider>
  <Page>
    <Collect mode='row'>
      <WithButtons/>
      <WithButtons/>
      <WithButtons/>
    </Collect>
  </Page>
</StyleProvider>