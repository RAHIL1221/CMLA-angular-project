import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMoreLinksComponent } from './update-more-links.component';

describe('UpdateMoreLinksComponent', () => {
  let component: UpdateMoreLinksComponent;
  let fixture: ComponentFixture<UpdateMoreLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMoreLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMoreLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
