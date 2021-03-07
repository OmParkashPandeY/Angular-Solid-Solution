// ------------------------------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MocktestFieldComponent } from './mocktest-field/mocktest-field.component';
import { PhpMocktestComponent } from './php-mocktest/php-mocktest.component';
import { PhpOopsMocktestComponent } from './php-oops-mocktest/php-oops-mocktest.component';


// ------------------------------------------------------------------------------------------

const routes: Routes = [
 
    {

     path : 'mock-test-list',

     children :[
        {
          path :'php-mock-test/:subject',
          component:PhpMocktestComponent
        },
        {
          path :'php-oops-mocktest',
          component:PhpOopsMocktestComponent
        },
        {
          path :'mocktest-field',
          component:MocktestFieldComponent
        },
      ],
    
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MockTestListRoutingModule { }
