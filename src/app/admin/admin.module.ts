import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestbookModule } from './testbook/testbook.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminMenubarComponent } from './admin-menubar/admin-menubar.component';
import { ReadbookModule } from './readbook/readbook.module';


@NgModule({
  declarations: [
    AdminComponent,
    AdminSidebarComponent,
    AdminNavbarComponent,
    AdminMenubarComponent,
   
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TestbookModule,
    ReadbookModule
  ]
})
export class AdminModule { }
