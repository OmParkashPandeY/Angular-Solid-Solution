import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbookQuestionComponent } from './testbook-question.component';

describe('TestbookQuestionComponent', () => {
  let component: TestbookQuestionComponent;
  let fixture: ComponentFixture<TestbookQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbookQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbookQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
