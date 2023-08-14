import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllhitSComponent } from './allhit-s.component';

describe('AllhitSComponent', () => {
  let component: AllhitSComponent;
  let fixture: ComponentFixture<AllhitSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllhitSComponent]
    });
    fixture = TestBed.createComponent(AllhitSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
