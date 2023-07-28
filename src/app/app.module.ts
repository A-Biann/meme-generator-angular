import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatStepperModule} from "@angular/material/stepper";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { UploadImageComponent } from './upload-image/upload-image.component';
import {MatButtonModule} from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import {GenerateMemeModule} from "./generate-meme/generate-meme.module";

@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    GenerateMemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
