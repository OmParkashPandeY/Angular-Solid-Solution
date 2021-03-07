// ------------------------------------------------------------------------------------------

import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhpBookComponent } from './php-book/php-book.component';

// ------------------------------------------------------------------------------------------

const routes: Routes = [
    
     {
       path :'admin/readbook',children:[
          {
            path: 'php-book',
            component:PhpBookComponent
          },
          
       
       ],
      
     },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadbookRoutingModule { }
