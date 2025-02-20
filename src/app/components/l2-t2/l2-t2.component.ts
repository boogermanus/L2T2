import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IBodySelect } from '../../interfaces/data/ibody-select';
import { IAcceleration } from '../../interfaces/data/iacceleration';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-l2-t2',
  standalone: true,
  imports: [
    MatSelectModule
  ],
  templateUrl: './l2-t2.component.html',
  styleUrl: './l2-t2.component.scss'
})
export class L2T2Component {

  public bodySelects!: Observable<IBodySelect[]>;
  public accelerations!: Observable<IAcceleration[]>;

  constructor(private readonly dataService: DataService) {
    this.bodySelects = this.dataService.getBodySelects();
    this.accelerations = this.dataService.getAccelerations();
  }
}
