import { Inject,
         Component,
         ViewEncapsulation,
         ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'about',
  template: `
    <div>
      <span xLarge>Universal JavaScript {{ title }}!</span>
    </div>
    Two-way binding: <input type="text" [value]="title" (input)="title = $event.target.value">
  `
})
export class AboutComponent {
  constructor(@Inject('req') req: any) {
    // console.log('req',  req)

  }
}
