// ------------------------------------------------------------------------------------------

import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadbookComponent } from './readbook/readbook.component';
import { TestbookComponent } from './testbook/testbook.component';


// ------------------------------------------------------------------------------------------

const routes: Routes = [
    
     {
       path :'admin',children:[
          {
            path: 'testbook',
            component:TestbookComponent
          },
          {
            path: 'readbook',
            component:ReadbookComponent
          },
       
       ],
      
     },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
