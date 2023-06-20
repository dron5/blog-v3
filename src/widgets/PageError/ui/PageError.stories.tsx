import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from
  'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = args =>
  <PageError {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];
