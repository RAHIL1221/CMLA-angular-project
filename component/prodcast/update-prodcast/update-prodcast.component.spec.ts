import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProdcastComponent } from './update-prodcast.component';

describe('UpdateProdcastComponent', () => {
  let component: UpdateProdcastComponent;
  let fixture: ComponentFixture<UpdateProdcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProdcastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProdcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
