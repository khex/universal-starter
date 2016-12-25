import { Component } from '@angular/core';

@Component({
  selector: 'read-by-ID',
  template: `<h3>Read By ID:{{id}} Component</h3>`
})
export class ReadByIDComponent {
  
  id:number = 1715;

}