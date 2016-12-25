import { Component,
         ViewEncapsulation,
         ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'delete-by-ID',
  template: `<h3>Delete By ID{{id}} Component</h3>`
})
export class DeleteByIDComponent {
  
  id: number = 1715;
  
}
