import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbagComponent } from './cartbag.component';

describe('CartbagComponent', () => {
  let component: CartbagComponent;
  let fixture: ComponentFixture<CartbagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartbagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
