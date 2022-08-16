import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreComponent2 } from './score.component';

describe('ScoreComponent', () => {
  let component: ScoreComponent2;
  let fixture: ComponentFixture<ScoreComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
