import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrillerSComponent } from './thriller-s.component';

describe('ThrillerSComponent', () => {
  let component: ThrillerSComponent;
  let fixture: ComponentFixture<ThrillerSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThrillerSComponent]
    });
    fixture = TestBed.createComponent(ThrillerSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
