import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTestbookComponent } from './new-testbook.component';

describe('NewTestbookComponent', () => {
  let component: NewTestbookComponent;
  let fixture: ComponentFixture<NewTestbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTestbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
