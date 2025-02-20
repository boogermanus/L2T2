import { Injectable } from '@angular/core';
import { IBodySelect } from '../interfaces/data/ibody-select';
import bodySelect from '../../../public/bodySelect.json'
import { IAcceleration } from '../interfaces/data/iacceleration';
import accelerations from '../../../public/accelerations.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private bodySelect: IBodySelect[] = [];
  private accelerations: IAcceleration[] = [];

  constructor() { 
    this.bodySelect = bodySelect
    this.accelerations = accelerations;
  }

  public getBodySelects() : IBodySelect[] {
    return this.bodySelect;
  }

  public getAccelerations(): IAcceleration[] {
    return this.accelerations;
  }
}
