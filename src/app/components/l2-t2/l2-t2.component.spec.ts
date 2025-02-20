import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2T2Component } from './l2-t2.component';
import { provideHttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

describe('L2T2Component', () => {
  let component: L2T2Component;
  let fixture: ComponentFixture<L2T2Component>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        L2T2Component,
        MatSelectModule,
        CommonModule,
        NoopAnimationsModule
      ],
      providers: [
        provideHttpClient(),
        DataService,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L2T2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have element with id bodySelects', () => {
    expect(compiled.querySelector('#bodySelects')).not.toBeNull();
  });

  it('should have element with id accelerations', () => {
    expect(compiled.querySelector('#accelerations')).not.toBeNull();
  });
});
