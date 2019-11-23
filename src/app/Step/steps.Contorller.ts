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

async getWeeklySteps(username: string) {
// how to build a Promise

await Axios.post(`http://localhost:3000/step/weekly`, {name: username}).then(res => {
  if (res.data.length > 0) {
    for (let i = 0; i < res.data.length; i++) {
        var stepinstance = new stepsModel(res.data[i].username ,
          res.data[i].macAddress, res.data[i].steps, res.data[i].calories);
          this.listofsteps.push(stepinstance);

    }
  }

  // return this.listofsteps;
  // foreach
});


}

getweeklysteps(username: string) {

  //var ListofSteps: stepsModel[];
  var ProMise = new Promise<stepsModel[]>((resolve, reject) => {
    Axios.post(`http://localhost:3000/step/weekly`, {name: username}).then((res) => {
    console.log(res.data);
    //var listofSteps: [];
    if (res.data.length > 0) {
      var listofSteps: stepsModel[];
      for (let i = 0; i < res.data.length; i++) {
        const stepinstance = new stepsModel(res.data[i].username ,
          res.data[i].macAddress, res.data[i].steps, res.data[i].calories);


          listofSteps.push(stepinstance);
        }
        console.log(listofSteps[0]);
    resolve(listofSteps);
  }
})

} )
return ProMise;
}
// tslint:disable-next-line: align

// stepService

}
