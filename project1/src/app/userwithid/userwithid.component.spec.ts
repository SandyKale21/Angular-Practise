import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwithidComponent } from './userwithid.component';

describe('UserwithidComponent', () => {
  let component: UserwithidComponent;
  let fixture: ComponentFixture<UserwithidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserwithidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserwithidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
