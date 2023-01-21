import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustTrainingComponent } from './adjust-training.component';

describe('AdjustTrainingComponent', () => {
  let component: AdjustTrainingComponent;
  let fixture: ComponentFixture<AdjustTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjustTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjustTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
