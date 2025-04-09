import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdcastComponent } from './list-prodcast.component';

describe('ListProdcastComponent', () => {
  let component: ListProdcastComponent;
  let fixture: ComponentFixture<ListProdcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProdcastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProdcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
