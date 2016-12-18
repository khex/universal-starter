import { Component,
         ViewEncapsulation,
         ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'about-this',
  template: `<h3>About This Component</h3>`
})
export class AboutThisComponent { }
