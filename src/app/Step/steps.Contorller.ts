import {Injectable} from '@angular/core';

import {stepsModel} from './steps.Model';

import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class StepService {
constructor() {}
listofsteps: [];

getWeeklySteps(username: string) {


return Axios.post(`http://localhost:3000/step/weekly`, {name: username}).then(res => {
  console.log(res.data[0]);
  // foreach
});


}
}
