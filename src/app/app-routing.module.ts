// ------------------------------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AngularDirectiveComponent } from './angular-directive/angular-directive.component';
import { AngularEventComponent } from './angular-event/angular-event.component';
import { AngularPipeComponent } from './angular-pipe/angular-pipe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MockTestListComponent } from './mock-test-list/mock-test-list.component';
import { SignupComponent } from './signup/signup.component';
import { TemplateComponent } from './template/template.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { UsersComponent } from './users/users.component';

// ------------------------------------------------------------------------------------------

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/event',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'event',
        component: AngularEventComponent,
      },
      {
        path: 'pipe',
        component: AngularPipeComponent,
      },
      {
        path: 'directive',
        component: AngularDirectiveComponent,
      }
    ],
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/edit/:id',
    component: EditUsersComponent,
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mock-test-list',
    component: MockTestListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
