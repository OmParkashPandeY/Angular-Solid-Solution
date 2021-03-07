import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbookLessionComponent } from './testbook-lession.component';

describe('TestbookLessionComponent', () => {
  let component: TestbookLessionComponent;
  let fixture: ComponentFixture<TestbookLessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbookLessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbookLessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
