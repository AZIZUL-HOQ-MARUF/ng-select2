import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { Select2Module } from 'ng2-select2';

@NgModule({
   declarations: [
      AppComponent,
      BasicComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      Select2Module
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
