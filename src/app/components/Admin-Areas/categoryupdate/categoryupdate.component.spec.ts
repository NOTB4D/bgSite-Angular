import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryupdateComponent } from './categoryupdate.component';

describe('CategoryupdateComponent', () => {
  let component: CategoryupdateComponent;
  let fixture: ComponentFixture<CategoryupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
