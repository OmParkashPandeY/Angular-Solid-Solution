import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TemplateComponent } from './template/template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { MockTestListModule } from './mock-test-list/mock-test-list.module';
import { NavbarComponent } from './navbar/navbar.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { AngularEventComponent } from './angular-event/angular-event.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { MyNavbarComponent } from './partials/my-navbar/my-navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularDirectiveComponent } from './angular-directive/angular-directive.component';
import { AngularPipeComponent } from './angular-pipe/angular-pipe.component';
import { SquireRootPipe } from './angular-pipe/custom-pipe/squire-root.pipe';
import { SweetTitleDirective } from './angular-directive/custom-directive/sweet-title.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    TemplateComponent,
    NavbarComponent,
    EditUsersComponent,
    AngularEventComponent,
    SidebarComponent,
    MyNavbarComponent,
    DashboardComponent,
    AngularDirectiveComponent,
    AngularPipeComponent,
    SquireRootPipe,
    SweetTitleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    SignupModule,
    HttpClientModule,
    AdminModule,
    MockTestListModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



