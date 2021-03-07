import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlMocktestComponent } from './html-mocktest.component';

describe('HtmlMocktestComponent', () => {
  let component: HtmlMocktestComponent;
  let fixture: ComponentFixture<HtmlMocktestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlMocktestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlMocktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
