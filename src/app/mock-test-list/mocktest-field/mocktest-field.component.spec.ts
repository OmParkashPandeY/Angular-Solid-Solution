import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktestFieldComponent } from './mocktest-field.component';

describe('MocktestFieldComponent', () => {
  let component: MocktestFieldComponent;
  let fixture: ComponentFixture<MocktestFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MocktestFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MocktestFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
