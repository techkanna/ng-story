import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from '../../components/button/button.component';
import Input from '../../components/input/input.component';
import Header from '../../combine components/header/header.component';
import Subscribe from '../../combine components/subscribe/subscribe.component';
import Page from './page.component';

import * as HeaderStories from '../../combine components/header/Header.stories';

export default {
  title: 'Assemble Pages/Page',
  component: Header,
  decorators: [
    moduleMetadata({
      declarations: [Button, Header, Subscribe, Input],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Page> = (args: Page) => ({
  component: Page,
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
