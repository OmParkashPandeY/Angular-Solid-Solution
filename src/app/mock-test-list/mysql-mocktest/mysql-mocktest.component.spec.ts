import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlMocktestComponent } from './mysql-mocktest.component';

describe('MysqlMocktestComponent', () => {
  let component: MysqlMocktestComponent;
  let fixture: ComponentFixture<MysqlMocktestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysqlMocktestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysqlMocktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
