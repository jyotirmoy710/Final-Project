import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllhitComponent } from './allhit.component';

describe('AllhitComponent', () => {
  let component: AllhitComponent;
  let fixture: ComponentFixture<AllhitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllhitComponent]
    });
    fixture = TestBed.createComponent(AllhitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
