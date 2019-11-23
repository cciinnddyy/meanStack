
import {Component} from '@angular/core';
import * as axois from 'axios';
import {stepsModel} from './steps.Model';
import {StepService} from './steps.Contorller';

@Component({
  selector: 'app-step-show',
  templateUrl: 'weekStep.component.html',
  providers:[StepService]
})

export class weekStepComponent {
// call api in this class?
// tslint => ':string' is redundant

  stepData: string;
  newString = 'No comment';
  entryname = '';
  entrymac = '';
  username = 'cindy';
  stepmodels: stepsModel[];

  onAddNewPost(): void {
   // this.newString = 'Add new Post success';
    this.newString = this.entryname;
  }

  constructor(private stepservice: StepService) {

  }

  getweekSteps(): void {
    this.stepservice.getweeklysteps(this.username).then((value) => {
      console.log('Hello ' + value);
      // this.stepmodels = value;
    }).catch((err) => {
      console.log(err);
    });

    //get data using web api


  }
}
