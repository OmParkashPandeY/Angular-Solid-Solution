// ------------------------------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MockTestListComponent } from './mock-test-list/mock-test-list.component';
import { SignupComponent } from './signup/signup.component';
import { TemplateComponent } from './template/template.component';
import { UsersComponent } from './users/users.component';

// ------------------------------------------------------------------------------------------

const routes: Routes = [
     {
       path :'',
       redirectTo :'/admin',
       pathMatch :'full',
     },
     {
       path :'template',
       component:TemplateComponent
     },
     {
       path :'home',
       component:HomeComponent
     },
     {
       path : 'admin',
       component:AdminComponent,
     },
     {
       path : 'users',
       component:UsersComponent,
     },
     {
       path : 'signup',
       component:SignupComponent
     },
     {
       path : 'login',
       component:LoginComponent
     },
     {
       path : 'mock-test-list',
       component:MockTestListComponent
     },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
