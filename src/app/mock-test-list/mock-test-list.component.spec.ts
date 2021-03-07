import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockTestListComponent } from './mock-test-list.component';

describe('MockTestListComponent', () => {
  let component: MockTestListComponent;
  let fixture: ComponentFixture<MockTestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockTestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
