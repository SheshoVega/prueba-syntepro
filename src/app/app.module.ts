import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

import { routes } from "./app.routes";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
