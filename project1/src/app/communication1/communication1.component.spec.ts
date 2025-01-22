import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Communication1Component } from './communication1.component';

describe('Communication1Component', () => {
  let component: Communication1Component;
  let fixture: ComponentFixture<Communication1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Communication1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Communication1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
