import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-input',
  template: `
  <input type="text" [ngClass]="classes" placeholder="{{label}}" />
  `,
  styleUrls: ['./input.scss'],
})
export default class InputComponent {
  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'ENTER KEYWORD';


  public get classes(): string[] {
    return ['storybook-input', `storybook-input--${this.size}`];
  }
}
