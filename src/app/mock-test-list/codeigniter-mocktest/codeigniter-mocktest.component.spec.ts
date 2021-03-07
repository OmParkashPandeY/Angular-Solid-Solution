import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeigniterMocktestComponent } from './codeigniter-mocktest.component';

describe('CodeigniterMocktestComponent', () => {
  let component: CodeigniterMocktestComponent;
  let fixture: ComponentFixture<CodeigniterMocktestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeigniterMocktestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeigniterMocktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
