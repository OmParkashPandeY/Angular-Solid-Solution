import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbookMenubarComponent } from './testbook-menubar.component';

describe('TestbookMenubarComponent', () => {
  let component: TestbookMenubarComponent;
  let fixture: ComponentFixture<TestbookMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbookMenubarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbookMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
