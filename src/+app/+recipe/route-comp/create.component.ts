import { Component,
         ViewEncapsulation,
         ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'create',
  template: `<h3>Create Post Component</h3>`
})
export class CreateComponent { }