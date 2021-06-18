import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinscreenerComponent } from './finscreener.component';

describe('FinscreenerComponent', () => {
  let component: FinscreenerComponent;
  let fixture: ComponentFixture<FinscreenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinscreenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinscreenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
