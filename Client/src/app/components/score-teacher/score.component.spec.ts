import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreComponent3 } from './score.component';

describe('ScoreComponent', () => {
  let component: ScoreComponent3;
  let fixture: ComponentFixture<ScoreComponent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreComponent3 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
