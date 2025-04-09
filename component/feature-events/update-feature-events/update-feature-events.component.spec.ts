import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFeatureEventsComponent } from './update-feature-events.component';

describe('UpdateFeatureEventsComponent', () => {
  let component: UpdateFeatureEventsComponent;
  let fixture: ComponentFixture<UpdateFeatureEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFeatureEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFeatureEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
