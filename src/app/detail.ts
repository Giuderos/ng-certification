export class Detail {
  name: string;
  currentCondition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  date: number;

  constructor(name: string, currentCondition: string, currentTemp: number, maxTemp: number, minTemp: number, date: number) {
    this.name = name;
    this.currentCondition = currentCondition;
    this.currentTemp = currentTemp;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.date = date;
  }
}