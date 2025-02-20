import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2T2Component } from './l2-t2.component';

describe('L2T2Component', () => {
  let component: L2T2Component;
  let fixture: ComponentFixture<L2T2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L2T2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L2T2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
