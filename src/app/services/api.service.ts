import { Injectable } from '@angular/core';
import { apiKey } from '../../apiKey';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private authKey: string = '';
  private apiUrl: string = 'https://api.astronomyapi.com/api/v2/bodies/positions'
  constructor(private readonly httpClient: HttpClient) {
    this.authKey = btoa(`${apiKey.id}:${apiKey.secret}`)
  }

  public getBody(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`, { params: this.getParams(), headers: this.getHeader() });
  }

  private getParams(): HttpParams {
    const dateStrings = new Date().toISOString().split('T');
    const date = dateStrings[0];
    const time = dateStrings[1].substring(0, dateStrings[1].length -5);

    const params = new HttpParams()
      .append('latitude', 33.67)
      .append('longitude', 101.82)
      .append('elevation', 1000)
      .append('from_date', date)
      .append('to_date', date)
      .append('time', time)
      .append('output', 'rows');

    return params;
  }

  private getHeader(): HttpHeaders {
    const header = new HttpHeaders()
      .append('Authorization', `Basic ${this.authKey}`)

    return header;
  }
}
