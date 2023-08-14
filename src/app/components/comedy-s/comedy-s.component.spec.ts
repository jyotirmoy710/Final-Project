import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedySComponent } from './comedy-s.component';

describe('ComedySComponent', () => {
  let component: ComedySComponent;
  let fixture: ComponentFixture<ComedySComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComedySComponent]
    });
    fixture = TestBed.createComponent(ComedySComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
