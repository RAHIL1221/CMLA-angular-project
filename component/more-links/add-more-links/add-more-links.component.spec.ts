import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoreLinksComponent } from './add-more-links.component';

describe('AddMoreLinksComponent', () => {
  let component: AddMoreLinksComponent;
  let fixture: ComponentFixture<AddMoreLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMoreLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMoreLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
