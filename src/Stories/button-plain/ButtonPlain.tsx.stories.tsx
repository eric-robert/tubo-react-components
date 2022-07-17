import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './ButtonPlain';

export default {

  title: 'Buttons/PlainButton',
  component: Button,

} as ComponentMeta<typeof Button>;


// Templates

export const Primary = () => 
  <Button text="Primary" primary />;

export const Secondary = () => 
  <Button text="Primary" />;

export const Danger = () => 
    <Button text="Danger" danger />;

export const Multiple = () => <div>
  <Button text="Some secondary option" />
  <Button text="Another" />
  <Button text="Primary" primary />
  <Button text="Danger" danger />
</div>

