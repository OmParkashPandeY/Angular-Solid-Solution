import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarlinkComponent } from './menubarlink.component';

describe('MenubarlinkComponent', () => {
  let component: MenubarlinkComponent;
  let fixture: ComponentFixture<MenubarlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubarlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
