// ------------------------------------------------------------------------------------------

import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTestbookComponent } from './new-testbook/new-testbook.component';
import { TestbookLessionComponent } from './testbook-lession/testbook-lession.component';
import { TestbookQuestionComponent } from './testbook-question/testbook-question.component';
import { TestbookSubjectComponent } from './testbook-subject/testbook-subject.component';

// ------------------------------------------------------------------------------------------

const routes: Routes = [
    
     {
       path :'admin/testbook',children:[
          {
            path: 'testbook-subject',
            component:TestbookSubjectComponent
          },
          {
            path: 'testbook-question',
            component:TestbookQuestionComponent
          },
          {
            path: 'testbook-lession',
            component:TestbookLessionComponent
          },
          {
            path: 'new-testbook',
            component:NewTestbookComponent
          },
       
       ],
      
     },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestbookRoutingModule { }
