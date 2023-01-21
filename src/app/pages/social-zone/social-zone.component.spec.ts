import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialZoneComponent } from './social-zone.component';

describe('SocialZoneComponent', () => {
  let component: SocialZoneComponent;
  let fixture: ComponentFixture<SocialZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
