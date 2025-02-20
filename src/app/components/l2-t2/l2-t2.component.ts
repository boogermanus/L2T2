import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IBodySelect } from '../../interfaces/data/ibody-select';
import { IAcceleration } from '../../interfaces/data/iacceleration';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-l2-t2',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './l2-t2.component.html',
  styleUrl: './l2-t2.component.scss'
})
export class L2T2Component {

  public bodySelects!: Observable<IBodySelect[]>;
  public accelerations!: Observable<IAcceleration[]>;
  public body: string = '';
  public acceleration: number = 0;

  constructor(private readonly dataService: DataService) {
    this.bodySelects = this.dataService.getBodySelects();
    this.accelerations = this.dataService.getAccelerations();
  }
}
