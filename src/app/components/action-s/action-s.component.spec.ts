import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSComponent } from './action-s.component';

describe('ActionSComponent', () => {
  let component: ActionSComponent;
  let fixture: ComponentFixture<ActionSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionSComponent]
    });
    fixture = TestBed.createComponent(ActionSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
