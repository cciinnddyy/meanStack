import {Injectable} from '@angular/core';

import {stepsModel} from './steps.Model';

import Axios from 'axios';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})

export class StepService {
constructor() {

}
listofsteps: stepsModel[];


getweeklysteps(username: string) {

  //var ListofSteps: stepsModel[];
  var ProMise = new Promise<stepsModel[]>((resolve, reject) => {
    Axios.post(`http://localhost:3000/step/weekly`, {name: username}).then((res) => {
    console.log(res.data);
    let ListofSteps: Array<stepsModel> = [];
    //var listofSteps: [];
    if (res.data.length > 0) {

      for (let i = 0; i < res.data.length; i++) {
        const stepinstance = new stepsModel(res.data[i].username ,
          res.data[i].macAddress, res.data[i].steps, res.data[i].calories);
          if(stepinstance.steps>0){

          ListofSteps.push(stepinstance);
        }
        }
    resolve(ListofSteps);
  }
  else
})

} )
return ProMise;
}


// tslint:disable-next-line: align

// stepService

}
