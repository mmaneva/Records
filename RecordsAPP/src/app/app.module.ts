import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { RecordsFormComponent } from './records/records-form/records-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    RecordsFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
