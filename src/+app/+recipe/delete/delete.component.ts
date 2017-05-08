import { OnInit,
         Renderer,
         ElementRef,
         Component,
         ViewEncapsulation,
         ChangeDetectionStrategy } from '@angular/core';
import { isNode,
         isBrowser }               from 'angular2-universal/browser';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation:   ViewEncapsulation.Emulated,
  selector: 'delete',
  template: '<h3>{{someText}}</h3>'
})
export class DeleteComponent implements OnInit{

    public titleString: string = 'The Component';
    public someText:    string = 'This is Text';
    constructor() {}

    ngOnInit() {

      /**
      if (isBrowser) {
      	this.someText = 'In The Browser Now!';
        console.log(this.someText);
      } else {
      	console.log('In The Node Now!');
      }
      **/
    }
}
