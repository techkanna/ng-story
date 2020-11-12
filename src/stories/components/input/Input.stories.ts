// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Input from './input.component';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<Input> = (args: Input) => ({
  component: Input,
  props: args,
});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'ENTER KEYWORD',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Email Address',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'ENTER KEYWORD',
};
