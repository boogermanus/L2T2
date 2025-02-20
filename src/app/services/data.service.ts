import { Injectable } from '@angular/core';
import { IBodySelect } from '../interfaces/data/ibody-select';
import { IAcceleration } from '../interfaces/data/iacceleration';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { IApiKey } from '../interfaces/data/iapi-key';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private bodySelect!: Observable<IBodySelect[]>
  private accelerations!: Observable<IAcceleration[]>;
  private apiKey!: IApiKey;

  constructor(private readonly httpClient: HttpClient) { 
    // this.bodySelect = bodySelect
    // this.accelerations = accelerations;
    this.bodySelect = this.httpClient.get<IBodySelect[]>('assets/bodySelect.json')
    this.accelerations = this.httpClient.get<IAcceleration[]>('assets/accelerations.json');
  }

  public getBodySelects() : Observable<IBodySelect[]> {
    return this.bodySelect;
  }

  public getAccelerations(): Observable<IAcceleration[]> {
    return this.accelerations;
  }
}
