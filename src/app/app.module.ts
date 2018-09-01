import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

import { routes } from "./app.routes";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    ListComponent,
    FormComponent,
    PostDetailComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
