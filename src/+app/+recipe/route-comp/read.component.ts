import { Component,
         ViewEncapsulation,
         ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'read',
  template: `
  <h3>Post Read Component</h3>
  <li><a routerLinkActive="router-link-active"
         routerLink="/post/add">Add Post</a></li>
  <li><a routerLinkActive="router-link-active"
         routerLink="/post/1715">Read By ID</a></li>
  <li><a routerLinkActive="router-link-active"
         routerLink="/post/1715/delete">Delete By ID</a></li>
  <li><a routerLinkActive="router-link-active"
         routerLink="/post/1715/update">Update By ID</a></li>
  `
})
export class ReadComponent { }
