import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestbookComponent } from './add-testbook.component';

describe('AddTestbookComponent', () => {
  let component: AddTestbookComponent;
  let fixture: ComponentFixture<AddTestbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
