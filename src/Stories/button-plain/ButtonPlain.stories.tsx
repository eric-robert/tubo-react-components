import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlainButton } from './ButtonPlain';

export default {

  title: 'Buttons/PlainButton',
  component: PlainButton,

} as ComponentMeta<typeof PlainButton>;


// Templates

export const Primary = () => 
  <PlainButton text="Primary" primary />;

export const Secondary = () => 
  <PlainButton text="Primary" />;

export const Danger = () => 
  <PlainButton text="Danger" danger />;

export const Disabled = () => 
  <PlainButton text="Disabled" disabled />;

export const Multiple = () => <div>
  <PlainButton text="Some disabled option" disabled />
  <PlainButton text="Plain" />
  <PlainButton text="Primary" primary />
  <PlainButton text="Danger" danger />
</div>

