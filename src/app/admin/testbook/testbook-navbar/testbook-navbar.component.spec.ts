import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbookNavbarComponent } from './testbook-navbar.component';

describe('TestbookNavbarComponent', () => {
  let component: TestbookNavbarComponent;
  let fixture: ComponentFixture<TestbookNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbookNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbookNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
