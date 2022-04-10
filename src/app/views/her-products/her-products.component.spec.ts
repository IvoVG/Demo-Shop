import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerProductsComponent } from './her-products.component';

describe('HerProductsComponent', () => {
  let component: HerProductsComponent;
  let fixture: ComponentFixture<HerProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
