// ------------------------------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeigniterMocktestComponent } from './codeigniter-mocktest/codeigniter-mocktest.component';
import { HtmlMocktestComponent } from './html-mocktest/html-mocktest.component';
import { MocktestFieldComponent } from './mocktest-field/mocktest-field.component';
import { MysqlMocktestComponent } from './mysql-mocktest/mysql-mocktest.component';
import { PhpMocktestComponent } from './php-mocktest/php-mocktest.component';
import { PhpOopsMocktestComponent } from './php-oops-mocktest/php-oops-mocktest.component';
import { MockTestListComponent } from './mock-test-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockTestListRoutingModule } from './mock-test-list-routing.module';

// --------------------------------------------------


@NgModule({
  declarations: [
    CodeigniterMocktestComponent,
    HtmlMocktestComponent,
    MocktestFieldComponent,
    MysqlMocktestComponent,
    PhpMocktestComponent,
    PhpOopsMocktestComponent,
    MockTestListComponent,
  ],

  // --------------------------------------------------
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MockTestListRoutingModule
  ]

// --------------------------------------------------

})
export class MockTestListModule { }
