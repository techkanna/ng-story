import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.scss'],
})
export default class SubscribeComponent {
  @Input()
  subscribed: Boolean = false;

  onClickMe() {
    this.subscribed = !this.subscribed;
  }
}
