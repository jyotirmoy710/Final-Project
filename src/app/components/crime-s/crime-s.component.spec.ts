import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeSComponent } from './crime-s.component';

describe('CrimeSComponent', () => {
  let component: CrimeSComponent;
  let fixture: ComponentFixture<CrimeSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrimeSComponent]
    });
    fixture = TestBed.createComponent(CrimeSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
