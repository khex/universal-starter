import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { APP_BASE_HREF }    from '@angular/common';

import { AboutModule }      from './+about/about.module';
import { HomeModule }       from './+home/home.module';
import { RecipeModule }     from './+recipe/recipe.module';
import { TodoModule }       from './+todo/todo.module';


import { SharedModule }     from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent,
	     XLargeDirective }  from './app.component';


@NgModule({
  declarations: [ AppComponent,
                  XLargeDirective ],
  imports:      [ SharedModule,
                  HomeModule,
                  AboutModule,
                  TodoModule,
                  RecipeModule,
                  AppRoutingModule ]
})
export class AppModule { }

export { AppComponent } from './app.component';
