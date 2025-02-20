import { Injectable } from '@angular/core';
import { IBodySelect } from '../interfaces/data/ibody-select';
import bodySelect from '../../../public/bodySelect.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public bodySelect: IBodySelect[] = []

  constructor() { 
    this.bodySelect = bodySelect
  }

  public getBodySelects() : IBodySelect[] {
    return this.bodySelect;
  }
}
