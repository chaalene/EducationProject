import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTrainerComponent } from './display-trainer.component';

describe('DisplayTrainerComponent', () => {
  let component: DisplayTrainerComponent;
  let fixture: ComponentFixture<DisplayTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
