import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanceSComponent } from './romance-s.component';

describe('RomanceSComponent', () => {
  let component: RomanceSComponent;
  let fixture: ComponentFixture<RomanceSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RomanceSComponent]
    });
    fixture = TestBed.createComponent(RomanceSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
