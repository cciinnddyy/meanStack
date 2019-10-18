import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// unlock feature for [(ngModel)]
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Let the typescript know where the file is
import {PostCreateComponent} from './Post/post-create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {weekStepComponent} from './Step/weekStep.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    weekStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
