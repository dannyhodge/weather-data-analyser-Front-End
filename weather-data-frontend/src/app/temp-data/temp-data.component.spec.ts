import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDataComponent } from './temp-data.component';

describe('TempDataComponent', () => {
  let component: TempDataComponent;
  let fixture: ComponentFixture<TempDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
