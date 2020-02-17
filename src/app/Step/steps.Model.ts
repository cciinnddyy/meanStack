
export class stepsModel {
  constructor(username: string, macAddress: string, steps: number, calories: number, weekGoal?: number) {
    this.username = username;
    this.macAddress = macAddress;
    this.steps = steps;
    this.weekGoal = weekGoal;
    this.calories = calories;
  }

  username: string;
  macAddress: string;
  steps: number;
  calories: number;

  weekGoal: number;

}
