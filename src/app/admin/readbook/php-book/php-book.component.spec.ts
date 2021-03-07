import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpBookComponent } from './php-book.component';

describe('PhpBookComponent', () => {
  let component: PhpBookComponent;
  let fixture: ComponentFixture<PhpBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
