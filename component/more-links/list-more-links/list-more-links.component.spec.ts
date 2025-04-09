import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoreLinksComponent } from './list-more-links.component';

describe('ListMoreLinksComponent', () => {
  let component: ListMoreLinksComponent;
  let fixture: ComponentFixture<ListMoreLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMoreLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMoreLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
