import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpOopsMocktestComponent } from './php-oops-mocktest.component';

describe('PhpOopsMocktestComponent', () => {
  let component: PhpOopsMocktestComponent;
  let fixture: ComponentFixture<PhpOopsMocktestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpOopsMocktestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpOopsMocktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
