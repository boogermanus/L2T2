import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IBodySelect } from '../../interfaces/data/ibody-select';
import { IAcceleration } from '../../interfaces/data/iacceleration';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '../../services/api.service';
import { TravelTimePipe } from '../../pipes/travel-time.pipe';

@Component({
    selector: 'app-l2-t2',
    imports: [
        CommonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        TravelTimePipe,
    ],
    templateUrl: './l2-t2.component.html',
    styleUrl: './l2-t2.component.scss'
})
export class L2T2Component {

  public bodySelects!: Observable<IBodySelect[]>;
  public accelerations!: Observable<IAcceleration[]>;
  public body: string = '';
  public acceleration: number = 0;
  public apiData!: Observable<any>;
  public distanceKm: number = 0;
  public distanceMeters: number = 0;
  public fullBurnTime: number = 0;
  public timeString: string = '';
  public maxVelocity: number = 0;
  public halfBurnTime: number = 0;

  constructor(
    private readonly dataService: DataService,
    private readonly apiService: ApiService
  ) {
    this.bodySelects = this.dataService.getBodySelects();
    this.accelerations = this.dataService.getAccelerations();
  }

  public getApiData(): void {

    if (this.acceleration === 0) {
      return;
    }

    this.apiService.getBody(this.body)
      .subscribe({
        next: (data) => {
          this.distanceKm = data?.data?.rows[0]?.positions[0]?.distance?.fromEarth?.km ?? 0
          this.distanceMeters = this.distanceKm * 1000;
          this.compute();
        }
      });
  }

  public compute(): void {
    this.fullBurnTime = Math.sqrt(((2 * this.distanceMeters) / this.acceleration));
    this.maxVelocity = this.acceleration * (this.fullBurnTime / 2);
    this.halfBurnTime = (this.maxVelocity / this.acceleration) + this.fullBurnTime;
  }
}
