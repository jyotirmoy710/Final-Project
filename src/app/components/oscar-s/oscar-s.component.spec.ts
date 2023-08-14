import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OscarSComponent } from './oscar-s.component';

describe('OscarSComponent', () => {
  let component: OscarSComponent;
  let fixture: ComponentFixture<OscarSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OscarSComponent]
    });
    fixture = TestBed.createComponent(OscarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
