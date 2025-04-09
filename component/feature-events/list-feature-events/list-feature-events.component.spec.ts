import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFeatureEventsComponent } from './list-feature-events.component';

describe('ListFeatureEventsComponent', () => {
  let component: ListFeatureEventsComponent;
  let fixture: ComponentFixture<ListFeatureEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFeatureEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFeatureEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
