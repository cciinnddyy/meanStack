import {Injectable} from '@angular/core';

import {stepsModel} from './steps.Model';

import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class StepService {
constructor() {

}
listofsteps: stepsModel[];

getWeeklySteps(username: string) {
// how to build a Promise

Axios.post(`http://localhost:3000/step/weekly`, {name: username}).then(res => {
  if (res.data.length > 0) {
    for (let i = 0; i < res.data.length; i++) {
        var stepinstance = new stepsModel(res.data[i].username ,
          res.data[i].macAddress, res.data[i].steps, res.data[i].calories);
          this.listofsteps.push(stepinstance);

    }
  }
  // foreach
});


}

getweeklysteps(username: string) {
  return new Promise<stepsModel[]>((resolve, reject) => {
    Axios.post(`http://localhost:3000/step/weekly`, {name: username}).then(res => {
  if (res.data.length > 0) {
    for (let i = 0; i < res.data.length; i++) {
        var stepinstance = new stepsModel(res.data[i].username ,
          res.data[i].macAddress, res.data[i].steps, res.data[i].calories);
          this.listofsteps.push(stepinstance);
          resolve(this.listofsteps);
    }
  }
}).catch((err) => {
  reject(err);
}); } )} }
