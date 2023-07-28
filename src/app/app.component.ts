import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(MatStepper) stepper!: MatStepper;
  imgUrl!: string;
  onImageUpdate(imgUrl: string) {
    this.imgUrl = imgUrl;
    if (this.stepper.selected) {
      this.stepper.selected.completed = true;
      this.stepper.next();
    }
  }
}
