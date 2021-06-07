import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageAddComponent } from './product-image-add.component';

describe('ProductImageAddComponent', () => {
  let component: ProductImageAddComponent;
  let fixture: ComponentFixture<ProductImageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
