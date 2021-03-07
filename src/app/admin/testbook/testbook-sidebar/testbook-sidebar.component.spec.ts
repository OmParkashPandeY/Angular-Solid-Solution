import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbookSidebarComponent } from './testbook-sidebar.component';

describe('TestbookSidebarComponent', () => {
  let component: TestbookSidebarComponent;
  let fixture: ComponentFixture<TestbookSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbookSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbookSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
