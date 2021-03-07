import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpMocktestComponent } from './php-mocktest.component';

describe('PhpMocktestComponent', () => {
  let component: PhpMocktestComponent;
  let fixture: ComponentFixture<PhpMocktestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpMocktestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpMocktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
