import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeatureEventsComponent } from './add-feature-events.component';

describe('AddFeatureEventsComponent', () => {
  let component: AddFeatureEventsComponent;
  let fixture: ComponentFixture<AddFeatureEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFeatureEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFeatureEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
