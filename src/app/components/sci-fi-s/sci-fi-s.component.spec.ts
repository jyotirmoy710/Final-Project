import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciFiSComponent } from './sci-fi-s.component';

describe('SciFiSComponent', () => {
  let component: SciFiSComponent;
  let fixture: ComponentFixture<SciFiSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SciFiSComponent]
    });
    fixture = TestBed.createComponent(SciFiSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
