// ------------------------------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTestbookComponent } from './new-testbook/new-testbook.component';
import { TestbookComponent } from './testbook.component';
import { TestbookLessionComponent } from './testbook-lession/testbook-lession.component';
import { TestbookSubjectComponent } from './testbook-subject/testbook-subject.component';
import { TestbookQuestionComponent } from './testbook-question/testbook-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestbookSidebarComponent } from './testbook-sidebar/testbook-sidebar.component';
import { TestbookNavbarComponent } from './testbook-navbar/testbook-navbar.component';
import { TestbookMenubarComponent } from './testbook-menubar/testbook-menubar.component';
import { TestbookRoutingModule } from './testbook-routing.module';


// ------------------------------------------------------------------------------------------

@NgModule({
  // --------------------------------------------------
  
  declarations: [
    TestbookComponent,
    NewTestbookComponent,
    TestbookLessionComponent,
    TestbookSubjectComponent,
    TestbookQuestionComponent,
    TestbookSidebarComponent,
    TestbookNavbarComponent,
    TestbookMenubarComponent,
  ],
  // --------------------------------------------------
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TestbookRoutingModule,
  ]
  // --------------------------------------------------
  
})
export class TestbookModule { }
// ------------------------------------------------------------------------------------------
