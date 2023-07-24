import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RallycallComponent } from './rallycall.component';

describe('RallycallComponent', () => {
  let component: RallycallComponent;
  let fixture: ComponentFixture<RallycallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RallycallComponent]
    });
    fixture = TestBed.createComponent(RallycallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
