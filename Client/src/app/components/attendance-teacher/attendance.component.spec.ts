import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceComponent2 } from './attendance.component';

describe('AttendanceComponent', () => {
  let component: AttendanceComponent2;
  let fixture: ComponentFixture<AttendanceComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
