
import {Component} from '@angular/core';
import * as axois from 'axios';

@Component({
  selector: 'app-step-show',
  templateUrl: 'weekStep.component.html'
})

export class weekStepComponent {
// call api in this class?
// tslint => ':string' is redundant

  stepData:string;
  newString = 'No comment';
  entryname = '';
  entrymac = '';
  onAddNewPost(): void {
   // this.newString = 'Add new Post success';
    this.newString = this.entryname;
  }

  public getweekSteps(): void{
      //get data using web api
  }
}
