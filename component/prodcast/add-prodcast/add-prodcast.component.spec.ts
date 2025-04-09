import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdcastComponent } from './add-prodcast.component';

describe('AddProdcastComponent', () => {
  let component: AddProdcastComponent;
  let fixture: ComponentFixture<AddProdcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProdcastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProdcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
