import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbookSubjectComponent } from './testbook-subject.component';

describe('TestbookSubjectComponent', () => {
  let component: TestbookSubjectComponent;
  let fixture: ComponentFixture<TestbookSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbookSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbookSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
