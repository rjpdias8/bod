import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServingBoardComponent } from './serving-board.component';

describe('ServingBoardComponent', () => {
  let component: ServingBoardComponent;
  let fixture: ComponentFixture<ServingBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServingBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
