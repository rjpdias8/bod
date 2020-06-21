import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeDirectorComponent } from './become-director.component';

describe('BecomeDirectorComponent', () => {
  let component: BecomeDirectorComponent;
  let fixture: ComponentFixture<BecomeDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
