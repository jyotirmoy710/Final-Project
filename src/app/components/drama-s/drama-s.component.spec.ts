import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaSComponent } from './drama-s.component';

describe('DramaSComponent', () => {
  let component: DramaSComponent;
  let fixture: ComponentFixture<DramaSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DramaSComponent]
    });
    fixture = TestBed.createComponent(DramaSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
