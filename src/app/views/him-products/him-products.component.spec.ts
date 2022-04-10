import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HimProductsComponent } from './him-products.component';

describe('HimProductsComponent', () => {
  let component: HimProductsComponent;
  let fixture: ComponentFixture<HimProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HimProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HimProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
