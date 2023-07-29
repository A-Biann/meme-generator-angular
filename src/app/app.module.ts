import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatStepperModule} from "@angular/material/stepper";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { UploadImageComponent } from './upload-image/upload-image.component';
import {MatButtonModule} from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
// import {GenerateMemeModule} from "./generate-meme/generate-meme.module";
import {GenerateMemeComponent} from "./generate-meme/generate-meme.component";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    GenerateMemeComponent
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
