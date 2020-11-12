import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from '../../components/button/button.component';
import Input from '../../components/input/input.component';
import Subscribe from './subscribe.component';

export default {
  title: 'Combine Components/Subscribe',
  component: Subscribe,
  decorators: [
    moduleMetadata({
      declarations: [Button, Input],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Subscribe> = (args: Subscribe) => ({
  component: Subscribe,
  props: args,
});

export const NotSubscribed = Template.bind({});
NotSubscribed.args = {
  subscribed: true,
};

export const Subscribed = Template.bind({});
Subscribed.args = {};
