import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceComponent3 } from './attendance.component';

describe('AttendanceComponent', () => {
  let component: AttendanceComponent3;
  let fixture: ComponentFixture<AttendanceComponent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceComponent3 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
